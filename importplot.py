plot = []
cr = []
yorn = True
plotfinsh = []
def importplot(runt=0):
    plot.append(input("請輸入劇情:"))
    cr.append(input("腳色名:"))
    yorn = input("繼續?(Y or N):")
    plotfinsh.append(f"[{plot[runt]},{cr[runt]}]")
    if yorn == "Y":
        importplot(runt+1)
    else:
        return 0
importplot(0)
print(plotfinsh)