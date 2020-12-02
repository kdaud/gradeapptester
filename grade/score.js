class Finalist{

    //@param coursework to pass whenever an instance of class Finalist is created
     //@param finalPaper to pass whenever an instance of class Finalist is created
    constructor(coursework, finalPaper) {
       this.coursework = coursework;
       this.finalPaper = finalPaper;
        
       //@function getFinalMarks that sums up the passed parameters and checks the students elegibility 
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

   //@instance of class Finalist created
   
   var studentId = new Finalist();  //@params pass the parameters associated with the student id ie 17/BIS/BU/R/*****/

   //@call function by variable name
   studentId.getFinalMarks();
   