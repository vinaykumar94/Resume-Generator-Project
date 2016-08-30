/* this is foundation Tab Jquery*/
$(document).foundation();

/* Template 2 starts*/
function outputname1(){    //outputname() function is created to grenerate html when button clicked
      alert("Use ctrl+p to generate PDF "); //Alerting User to Generate PDF
      var temp1Obj = {}; //object to store data from th user
        temp1Obj["Objective"] = $('form#register input[name="object"]').val();  //storing data from the user using val
        temp1Obj["Name"] = $('form#register input[Name="name"]').val();
        temp1Obj["Email"] = $('form#register input[name="email"]').val();
        temp1Obj["Mobile"] = $('form#register input[name="mobile"]').val();
        temp1Obj["Website"] = $('form#register input[name="website"]').val();
        temp1Obj["Door_No"] = $('form#register input[name="doorno"]').val();
        temp1Obj["City"] = $('form#register input[name="city"]').val();
        temp1Obj["State"] = $('form#register input[name="state"]').val();
        temp1Obj["Birth"] = $('form#register input[name="birth"]').val();
        temp1Obj["Father"] = $('form#register input[name="father"]').val();
        temp1Obj["Gender"] = $('form#register input[name="gender"]').val();
        temp1Obj["Language"] = $('form#register input[name="language"]').val();
        temp1Obj["SSC"] = $('form#register input[name="ssc"]').val();
        temp1Obj["Institution"] = $('form#register input[name="school"]').val();
        temp1Obj["Duration1"] = $('form#register input[name="years"]').val();
        temp1Obj["Board1"] = $('form#register input[name="board1"]').val();
        temp1Obj["PUC"] = $('form#register input[name="puc"]').val();
        temp1Obj["College"] = $('form#register input[name="college"]').val();
        temp1Obj["Duration2"] = $('form#register input[name="year"]').val();
        temp1Obj["Board2"] = $('form#register input[name="board2"]').val();
        temp1Obj["Degree"] = $('form#register input[name="degree"]').val();
        temp1Obj["Institute"] = $('form#register input[name="college2"]').val();
        temp1Obj["Percentage2"] = $('form#register input[name="marks"]').val();
        temp1Obj["Duration3"] = $('form#register input[name="year1"]').val();
        temp1Obj["Job"] = $('form#register input[name="job"]').val();
        temp1Obj["Company"] = $('form#register input[name="company"]').val();
        temp1Obj["Start"] = $('form#register input[name="start"]').val();
        temp1Obj["End"] = $('form#register input[name="end"]').val();
        temp1Obj["Project"] = $('form#register input[name="project"]').val();
        temp1Obj["Hobbies"] = $('form#register input[name="hobbies"]').val();
        temp1Obj["Activity"] = $('form#register input[name="activities"]').val();
        temp1Obj["Technical"] = $('form#register input[name="technical"]').val();
        temp1Obj["Language"] = $('form#register input[name="language"]').val();
        temp1Obj["Interest"] = $('form#register input[name="interest"]').val();
        temp1Obj["Personal"] = $('form#register input[name="personal"]').val();
        temp1Obj["Workshop"] = $('form#register input[name="work"]').val();
      
//variable is created to store html template style
 var html ='<table align="left" border="0" cellpadding="0" cellspacing="0" style="border:3px solid gray; width:100%">'+
              '<tbody>'+
                   '<tr style="font-size:25px;">'+
                       '<td>'+ '<h1 style=color:#ceb83b;font-size:30px;font-family:Lucida;font-weight:bold;margin-left:50px;margin-top:25px;">' + temp1Obj.Name + '</h1>'+ '</td>'+
                   '</tr>'+
            '<tr>'+
              '<td>'+
                  '<p style="margin:0;font-size:1.4em;font-family:Futura;margin-left:50px;font-style:italic;">'+ 'Phone :'+ temp1Obj.Mobile  + ' / ' +  ' E-mail : ' + temp1Obj.Email +  ' / ' +  ' Contact Address : ' +  temp1Obj.Door_No  + ' , ' + temp1Obj.City  + '  , '  + temp1Obj.State + '</h4>'+
                  '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + 'PROFESSIONAL SYNOPSIS : ' +'</h3>'+ 
                  '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + temp1Obj.Objective + '</p>'+ 
                  '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + 'EDUCATIONAL QUALIFICATIONS : ' + '</h3>'+ 
                  '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + ' Graduated in '  + temp1Obj.Degree + ' from ' + temp1Obj.Institute + ' with ' + temp1Obj.Percentage2 + ' in ' + temp1Obj.Duration3  +  '</p>'+
                  '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + ' Completed '  + ' 12th Class ' + ' from ' + temp1Obj.College + '('+temp1Obj.Board2+')' + ' with ' + temp1Obj.PUC + ' marks ' + ' in ' + temp1Obj.Duration2 + '</p>'+
                  '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + ' Completed '  + ' 10th Class ' + ' from ' + temp1Obj.Institution + '('+temp1Obj.Board1 +')' +  ' with ' + temp1Obj.SSC + ' marks ' + ' in ' + temp1Obj.Duration3  + '</p>'+
                  '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + 'PROJECT DETAILS : ' +'</h3>'+
                  '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + temp1Obj.Project + '</p>'+
                  '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + 'WORKSHOPS ATTENDED : ' +'</h3>'+
                  '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + temp1Obj.Workshop + '</p>'+
                  '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + 'AREAS OF INTEREST : ' +'</h3>'+
                  '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + temp1Obj.Interest + '</p>'+
                 '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + ' TECHNICAL SKILLS : ' +'</h3>'+
                 '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + temp1Obj.Technical + '</p>'+
                 '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + 'INTER PERSONAL SKILLS : ' +'</h3>'+
                 '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + temp1Obj.Personal  + '</p>'+
                 '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + 'HOBBIES AND INTERESTS : ' +'</h3>'+
                 '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + temp1Obj.Hobbies + '</p>'+
                 '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + 'EXTRA-CURRICULAR ACTIVITIES : ' +'</h3>'+
                 '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + temp1Obj.Activity + '</p>'+
                 '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + 'EMPLOYMENT DETAILS : ' +'</h3>'+
                 '<p style="font-size:1.2em;color:#511d3c;font-family:Lucida;margin-left:150px;">' + ' Worked as ' + temp1Obj.Job + ' at ' + temp1Obj.Company + ' from ' + temp1Obj.Start + ' to ' + temp1Obj.End + '</p>'+
                 '<h3 style="color:#ceb83b;font-family:Lucida;margin-left:40px;text-decoration:underline;">' + 'PERSONAL DETAILS : ' +'</h3>'+
                 '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + ' Date of Birth : ' + temp1Obj.Birth + '</p>'+
                 '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + "Father's Name : " + temp1Obj.Father + '</p>'+
                 '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + 'Gender : ' + temp1Obj.Gender + '</p>'+
                 '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + ' Languages Known : ' + temp1Obj.Language + '</p>'+
                 '<p style="font-size:1.2em;font-family:Lucida;margin-left:150px;color:#511d3c;">' + ' Website  : ' + temp1Obj.Website + '</p>'+
              '</td>'+
              '</tr>'+
          '</tbody>'+
        '</table>'

                var wnd = window.open("about:blank", "" ); //Variable is created for window.open method
                wnd.document.write(html);//calling the variable to write html in new page
        
               return html;

              
             
}// End of Function