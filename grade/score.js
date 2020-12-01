class Finalist{

    constructor(coursework, finalPaper) {
       this.coursework = coursework;
       this.finalPaper = finalPaper;
        
       this.getFinalMarks = function () {
       var marks = (this.coursework + this.finalPaper + 5);
   
    if(marks >= 50){
      console.log('The student is eligible to apply for Graduation: ' + 'Final Marks: '+marks);
   }
   else if(marks < 50 ){
   console.log('Not eligible for for Graduation'+ 'Final Marks: '+marks);
          }
       }
     }
   }
   var studentId = new Finalist();
   studentId.getFinalMarks();
   