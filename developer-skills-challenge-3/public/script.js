// Test data
/*

1. Total hours worked
2. #DONE Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
function calcAverage(numberArray) {
    let sum = 0;
    let average = 0;
    const arrayLength = numberArray.length;
    for (let i = 0; i < arrayLength; i++) {
        const value = numberArray[i];
        if (value === undefined)
            continue;
        sum += value;
    }
    average = ((sum / arrayLength) * 10) / 10;
    return average;
}
function summaryWeek(dailyHours) {
    let totalHoursWorked = 0;
    let averageDailyHours = calcAverage(dailyHours);
    let mostWorkedDay = dailyHours[0];
    let dayName;
    let daysWorked = 0;
    let isFullTime = false;
    if (dailyHours.length === 0) {
        console.error('O array enviado na função summaryWeek deve conter pelo menos um valor.');
    }
    for (let i = 0; i < dailyHours.length; i++) {
        const value = dailyHours[i];
        if (value === undefined)
            continue;
        totalHoursWorked += value;
        if (mostWorkedDay < value) {
            mostWorkedDay = dailyHours[i];
        }
        if (value > 0) {
            daysWorked++;
        }
    }
    switch (dailyHours.indexOf(mostWorkedDay)) {
        case 0:
            dayName = 'Domingo';
            break;
        case 1:
            dayName = 'Segunda';
            break;
        case 2:
            dayName = 'Terça';
            break;
        case 3:
            dayName = 'Quarta';
            break;
        case 4:
            dayName = 'Quinta';
            break;
        case 5:
            dayName = 'Sexta';
            break;
        case 6:
            dayName = 'Sábado';
            break;
        default:
            dayName =
                'Erro ao encontrar o index do array para verificar o dia mais trabalhado.';
            break;
    }
    isFullTime = totalHoursWorked >= 35 ? true : false;
    const workedWeek = {
        totalHours: totalHoursWorked,
        average: averageDailyHours,
        daysWorked: daysWorked,
        mostWorkedDay: dayName,
        isFullTime: isFullTime,
    };
    return workedWeek;
}
console.log(summaryWeek([7.5, 8, 6.5, 0, 8.5, 4, 0]));
export {};
//# sourceMappingURL=script.js.map