$(document).ready(function(){
    $("#submit").click(function(){
        var career=$('form#register input[Objective="object"]').val();
        var name=$('form#register input[Name="name"]').val();
        var email=$('form#register input[Email="email"]').val();
        var mobile=$('form#register input[Mobile="mobile"]').val();
        var website=$('form#register input[Website="webiste"]').val();
        var school=$('form#register input[Institution="school"]').val();
        var ssc=$('form#register input[SSC="ssc"]').val();
        var duration1=$('form#register input[Duration="years"]').val();
        var board1=$('form#register input[Board="board1"]').val();
        var college=$('form#register input[College="college"]').val();
        var puc=$('form#register input[PUC="puc"]').val();
        var duration2=$('form#register input[Duration="year"]').val();
        var board2=$('form#register input[Board="board2"]').val();
        var college2=$('form#register input[Institute="college2"]').val();
        var degree=$('form#register input[Degree="degree"]').val();
        var duration3=$('form#register input[Duration="year1"]').val();
        var marks=$('form#register input[Percentage="marks"]').val();
        var skills=$('form#register input[Skills="skills"]').val();
        var project=$('form#register input[Project="project"]').val();
        var job=$('form#register input[Job="job"]').val();
        var company=$('form#register input[Company="company"]').val();
        var start=$('form#register input[Start="start"]').val();
        var end=$('form#register input[End="end"]').val();
       
        

        
        var htmlObj = outputname();
        
        var pdf = new jsPDF();

        var pdf1 = new jsPDF(htmlObj);        
        
        /*Basic Info*/
        pdf.setFontSize(22);
        pdf.setFontType("bold");
        pdf.text(75, 20, ''+ name);
        pdf.setFontSize(10);
        pdf.setFontType("italic");
        pdf.setTextColor(0, 0, 255);
        pdf.text(60,28, 'E-mail :' +  email);
        pdf.setFontSize(10);
        pdf.setFontType("italic");
        pdf.text(120,28, 'Mobile : ' + mobile);
        pdf.setLineWidth(0.5);
        pdf.line(5, 34, 205, 32);
        pdf.setFontSize(9);
        pdf.setFontType('bold');
        pdf.setFont("helvetica");
        pdf.setTextColor(0,0,0);
        pdf.setLineWidth(0.3);
        pdf.line(5, 41, 50, 41);
        pdf.text(5,40, 'PROFESSIONAL SYNOPSIS :');
        pdf.setFontSize(8.5);
        pdf.setFontType('regular');
        pdf.text(6,47, " " + career);

        /*EducationalDetails*/
        pdf.setFontSize(9);
        pdf.setFontType('bold');
        pdf.setFont("helvetica");
        pdf.setLineWidth(0.3);
        pdf.line(5, 56, 59, 56);
        pdf.text(5,55, 'EDUCATIONAL QUALIFICATIONS :');
        /*10th class*/
        pdf.setFontSize(8.4);
        pdf.setFontType('bold');
        pdf.text(5,60," 10th Class (SSC) :" );
        pdf.setFontSize(8.2);
        pdf.setFontType('regular');
        pdf.text(10,64,"School Name : " + school);
        pdf.text(10,68,"Board of Education : " + board1);
        pdf.text(10,72,"Percenatge :" + ssc);
        pdf.text(10,76,"Duration Of Course : " + duration1);
        /*12th Class*/
        pdf.setFontSize(8.4);
        pdf.setFont("helvetica");
        pdf.setFontType('bold');
        pdf.text(5,80," 12th Class (PUC) :" );
        pdf.setFontSize(8.2);
        pdf.setFontType('regular');
        pdf.text(10,84,"College Name : " + college);
        pdf.text(10,88,"Board of Education : " + board2);
        pdf.text(10,92,"Percenatge :" + puc);
        pdf.text(10,96,"Duration Of Course : " + duration2);
        /*Degree*/
        pdf.setFontSize(8.4);
        pdf.setFont("helvetica");
        pdf.setFontType('bold');
        pdf.text(5,100,"Under-Graduate (Degree) :" );
        pdf.setFontSize(8.2);
        pdf.setFontType('regular');
        pdf.text(10,104,"Degree & Stream : " + degree);
        pdf.text(10,108,"Instutution Name : " + college2);
        pdf.text(10,112,"Percentage : " + marks);
        pdf.text(10,116,"Duration Of Course : " + duration3);


        /*Technical Skills*/
        pdf.setFontSize(9);
        pdf.setFont("helvetica");
        pdf.setFontType('bold');
        pdf.setLineWidth(0.3);
        pdf.line(5, 125, 18,125 );
        pdf.text(5,124,"Skills :" );
        pdf.setFontSize(8.4);
        pdf.setFontType('bold');
        pdf.text(6,130,"Technical Skills :");
        pdf.setFontSize(8.2);
        pdf.setFontType('regular');
        pdf.text(10,134,"Skills include " + skills);


        
        /*Project Details*/
        pdf.setFontSize(9);
        pdf.setFont("helvetica");
        pdf.setFontType('bold');
        pdf.setLineWidth(0.3);
        pdf.line(5, 145, 30,145 );
        pdf.text(5,144,"Project Details :" );
        pdf.setFontSize(8.2);
        pdf.setFontType('regular');
        pdf.text(10,152," " + project);
 
        /*Employment Details*/
        pdf.setFontSize(9);
        pdf.setFont("helvetica");
        pdf.setFontType('bold');
        pdf.setLineWidth(0.3);
        pdf.line(5, 161,38 ,161 );
        pdf.text(5,160,"Employment Details :" );
        pdf.setFontSize(8.2);
        pdf.setFontType('regular');
        pdf.text(10,166,"Job title : " + job);
        pdf.text(10,170,"Company Name : " + company);
        pdf.text(10,174,"Start Month and Year : " + start);
        pdf.text(10,178,"End of Month and Year : " + end);

        /*Areas of Interest*/
        pdf.setFontSize(9);
        pdf.setFont("helvetica");
        pdf.setFontType('bold');
        pdf.setLineWidth(0.3);
        pdf.line(5, 187, 33,187 );
        pdf.text(5,186,"Areas of Interest :" );




        
        pdf.addPage();
        pdf.save('Resume.pdf');
        
    });
});
