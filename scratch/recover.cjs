const fs = require('fs');
const path = require('path');
const readline = require('readline');

const transcriptPath = "C:\\Users\\guru pavan\\.gemini\\antigravity-ide\\brain\\798e7fa2-8f8c-4d1b-8351-1f42ae6e821c\\.system_generated\\logs\\transcript_full.jsonl";

async function recover() {
  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    try {
      const data = JSON.parse(line);
      if (data.type === 'PLANNER_RESPONSE' && data.tool_calls) {
        for (const call of data.tool_calls) {
          const name = call.name;
          const args = call.args || {};
          let targetFile = args.TargetFile || '';
          
          if (typeof targetFile === 'string' && targetFile.startsWith('"') && targetFile.endsWith('"')) {
            targetFile = targetFile.slice(1, -1);
          }
          
          if (targetFile.startsWith('C:/Users/guru pavan/meet_mind/') && !targetFile.startsWith('C:/Users/guru pavan/meet_mind/scratch')) {
            const winPath = targetFile.replace(/\//g, '\\');
            
            if (name === 'write_to_file') {
              let content = args.CodeContent || '';
              if (typeof content === 'string' && content.startsWith('"') && content.endsWith('"')) {
                try { content = JSON.parse(content); } catch (e) {}
              }
              
              fs.mkdirSync(path.dirname(winPath), { recursive: true });
              fs.writeFileSync(winPath, content, 'utf8');
              console.log(`Recovered ${winPath}`);
            } 
            else if (name === 'replace_file_content') {
              if (fs.existsSync(winPath)) {
                let content = fs.readFileSync(winPath, 'utf8');
                let target = args.TargetContent || '';
                let replacement = args.ReplacementContent || '';
                
                if (typeof target === 'string' && target.startsWith('"')) {
                  try { target = JSON.parse(target); } catch (e) {}
                }
                if (typeof replacement === 'string' && replacement.startsWith('"')) {
                  try { replacement = JSON.parse(replacement); } catch (e) {}
                }
                
                if (content.includes(target)) {
                  content = content.replace(target, replacement);
                  fs.writeFileSync(winPath, content, 'utf8');
                  console.log(`Replaced in ${winPath}`);
                }
              }
            }
            else if (name === 'multi_replace_file_content') {
              if (fs.existsSync(winPath)) {
                let content = fs.readFileSync(winPath, 'utf8');
                let chunks = args.ReplacementChunks || [];
                if (typeof chunks === 'string') {
                  try { chunks = JSON.parse(chunks); } catch (e) {}
                }
                
                for (const chunk of chunks) {
                  let target = chunk.TargetContent || '';
                  let replacement = chunk.ReplacementContent || '';
                  if (content.includes(target)) {
                    content = content.replace(target, replacement);
                  }
                }
                fs.writeFileSync(winPath, content, 'utf8');
                console.log(`Multi-replaced in ${winPath}`);
              }
            }
          }
        }
      }
    } catch (err) {
      // skip
    }
  }
  console.log("Recovery complete.");
}

recover();
