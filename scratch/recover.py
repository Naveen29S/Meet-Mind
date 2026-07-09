import json
import os

transcript_path = r"C:\Users\guru pavan\.gemini\antigravity-ide\brain\798e7fa2-8f8c-4d1b-8351-1f42ae6e821c\.system_generated\logs\transcript_full.jsonl"

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
        except Exception:
            continue
        if data.get('type') == 'PLANNER_RESPONSE' and 'tool_calls' in data:
            for call in data['tool_calls']:
                name = call.get('name')
                args = call.get('args', {})
                target_file = args.get('TargetFile', '')
                
                # TargetFile might have surrounding quotes if it was parsed as string literally, let's clean it up
                if isinstance(target_file, str) and target_file.startswith('"') and target_file.endswith('"'):
                    target_file = target_file[1:-1]
                    
                if target_file.startswith('C:/Users/guru pavan/meet_mind/') and not target_file.startswith('C:/Users/guru pavan/meet_mind/scratch'):
                    win_path = target_file.replace('/', '\\')
                    
                    if name == 'write_to_file':
                        content = args.get('CodeContent', '')
                        if isinstance(content, str) and content.startswith('"') and content.endswith('"'):
                            # Need to handle JSON string unescaping if the args were passed as raw JSON strings
                            # Usually args are dict objects, but just in case
                            try:
                                content = json.loads(content)
                            except:
                                pass
                                
                        os.makedirs(os.path.dirname(win_path), exist_ok=True)
                        with open(win_path, 'w', encoding='utf-8') as out_f:
                            out_f.write(content)
                            print(f"Recovered {win_path} (write_to_file)")
                            
                    elif name == 'replace_file_content':
                        if os.path.exists(win_path):
                            with open(win_path, 'r', encoding='utf-8') as in_f:
                                content = in_f.read()
                            target = args.get('TargetContent', '')
                            replacement = args.get('ReplacementContent', '')
                            
                            if isinstance(target, str) and target.startswith('"') and target.endswith('"'):
                                try: target = json.loads(target)
                                except: pass
                            if isinstance(replacement, str) and replacement.startswith('"') and replacement.endswith('"'):
                                try: replacement = json.loads(replacement)
                                except: pass
                                
                            if target in content:
                                content = content.replace(target, replacement)
                                with open(win_path, 'w', encoding='utf-8') as out_f:
                                    out_f.write(content)
                                print(f"Applied replacement to {win_path} (replace_file_content)")
                                    
                    elif name == 'multi_replace_file_content':
                        if os.path.exists(win_path):
                            with open(win_path, 'r', encoding='utf-8') as in_f:
                                content = in_f.read()
                            chunks = args.get('ReplacementChunks', [])
                            if isinstance(chunks, str):
                                try: chunks = json.loads(chunks)
                                except: chunks = []
                                
                            for chunk in chunks:
                                target = chunk.get('TargetContent', '')
                                replacement = chunk.get('ReplacementContent', '')
                                if target in content:
                                    content = content.replace(target, replacement)
                            with open(win_path, 'w', encoding='utf-8') as out_f:
                                out_f.write(content)
                            print(f"Applied multi replacement to {win_path} (multi_replace_file_content)")

print("Recovery complete.")
