var isConfirm = confirm("Чи бажаєте ви почати гру?");
if (isConfirm) {
    var multipleInterval = 1;
    var multipleReward = 1;
    var totalReward = 0;

    while (isConfirm) {
        var randomNumber = Math.floor((Math.random() * (5 * multipleInterval + 1)));
        for(var i = 1; i <= 5; i = i*i + 1 ) {
                var userAnswer = parseInt(prompt(`Введіть ваше число від 0 до ${5 * multipleInterval}`, ""));

                while (isNaN(userAnswer)) {
                    userAnswer = parseInt(prompt(`ПОМИЛКА. Введіть ваше ЧИСЛО від 0 до ${5 * multipleInterval}`, ""));
                }

                var reward = 0;
                var userWon = false;
                if (randomNumber === userAnswer ) {
                    reward = 10 / i * multipleReward ;
                    console.log(`Ви виграли ${reward} $.`);
                    userWon = true;
                    break;
                }
    }

    if (reward > 0) {
    multipleInterval*=2;
    multipleReward*=3;
    totalReward += reward;
    } else {
        multipleInterval = 1;
        multipleReward = 1;
        totalReward = 0;
        console.log(`Ваш виграш ${totalReward} $.`);
    }

    // that's for next games, we must to know when user won, to multiple reward and interval, or if he loss "reset" it

    isConfirm = confirm(`Ваш виграш ${totalReward} $. Граємо далі?`) ;

        if (isConfirm === false) {
            console.log(`Дякуємо за гру, ваш виграш становить ${totalReward} $.`);
        }
}
} else {
    console.log("Сьогодні ви не виграли мільйон, а могли.");
}
