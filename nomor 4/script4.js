(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + " : " + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Jawaban Benar!');
        } else {
            console.log('SALAH, coba lagi :)');
        }
    }
    
    var q1 = new Question('Apakah JavaScript merupakan bahasa pemrograman paling keren sedunia?',
                         ['Ya', 'Ga'],
                         0);
    var q2 = new Question('Siapa nama dosen yang mengajar kuliah ini?',
                         ['John', 'Michael', 'Oskar'],
                         2);
    var q3 = new Question('Kata yang paling bagus untuk mendeskripsikan coding?',
                         ['Bosen', 'Susah', 'Membahagiakan', 'Membosenkan'],
                         2);
    
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Pilih jawaban yang benar!'));
    
    questions[n].checkAnswer(answer);
	
})();
