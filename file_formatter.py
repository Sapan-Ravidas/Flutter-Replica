import os

with open("main.js") as file:
    reader = file.read()

file = open("main2.js", "w")
for ele in reader:
    if ele == "{":
        file.write(ele + "\n" + "\t")
        continue
    if ele == "}":
        file.write("\n" + ele + "\n\n")
        continue
    file.write(ele)

file.close()