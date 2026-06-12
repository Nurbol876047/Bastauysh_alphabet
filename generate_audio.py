import os
import subprocess
import time

LETTERS = [
{'l':'А','w':'Алма'}, {'l':'Ә','w':'Әже'}, {'l':'Б','w':'Бала'},
{'l':'В','w':'Велосипед'}, {'l':'Г','w':'Гүл'}, {'l':'Ғ','w':'Ғарыш'},
{'l':'Д','w':'Дос'}, {'l':'Е','w':'Ешкі'}, {'l':'Ё','w':'Ёлка'},
{'l':'Ж','w':'Жұлдыз'}, {'l':'З','w':'Зебра'}, {'l':'И','w':'Ит'},
{'l':'Й','w':'Йод'}, {'l':'К','w':'Кітап'}, {'l':'Қ','w':'Қоян'},
{'l':'Л','w':'Лимон'}, {'l':'М','w':'Мысық'}, {'l':'Н','w':'Нан'},
{'l':'Ң','w':'Таң'}, {'l':'О','w':'Орындық'}, {'l':'Ө','w':'Өрік'},
{'l':'П','w':'Піл'}, {'l':'Р','w':'Раушан'}, {'l':'С','w':'Су'},
{'l':'Т','w':'Түлкі'}, {'l':'У','w':'Ура'}, {'l':'Ұ','w':'Ұя'},
{'l':'Ү','w':'Үй'}, {'l':'Ф','w':'Футбол'}, {'l':'Х','w':'Хат'},
{'l':'Һ','w':'Шаһар'}, {'l':'Ц','w':'Цирк'}, {'l':'Ч','w':'Чемодан'},
{'l':'Ш','w':'Шар'}, {'l':'Щ','w':'Щётка'}, {'l':'Ъ','w':'Қатаң белгі'},
{'l':'Ы','w':'Ыдыс'}, {'l':'І','w':'Іні'}, {'l':'Ь','w':'Жұмсақ белгі'},
{'l':'Э','w':'Экран'}, {'l':'Ю','w':'Юрта'}, {'l':'Я','w':'Январь'}
]

out_dir = "public/audio"
os.makedirs(out_dir, exist_ok=True)

for item in LETTERS:
    l = item['l']
    w = item['w']
    
    l_file = f"{out_dir}/letter_{l}.mp3"
    if not os.path.exists(l_file):
        subprocess.run(["venv/bin/python3", "-m", "edge_tts", "--voice", "kk-KZ-AigulNeural", "--text", l, "--write-media", l_file])
        time.sleep(0.5)
        
    w_file = f"{out_dir}/word_{w}.mp3"
    if not os.path.exists(w_file):
        subprocess.run(["venv/bin/python3", "-m", "edge_tts", "--voice", "kk-KZ-AigulNeural", "--text", w, "--write-media", w_file])
        time.sleep(0.5)

print("Done")
