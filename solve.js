
for (var x = -999; x < 999; x += 1) {
    for (var y = -999; y < 999; y += 1) {
        let left = Math.pow(3, (2 * x) - 1)
        let right = Math.pow(4, (5 * y) + 2)

        if (isFinite(left == right)){
            console.log("Using X = " + x + " and Y = " + y + "\n" + left + " = " + right)
        }
    }
}