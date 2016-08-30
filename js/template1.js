/* this is foundation Tab Jquery*/
$(document).foundation();



/* Template 1  starts*/
function outputname(){       //outputname() function is created to grenerate html when button clicked
       alert("Use ctrl+p to generate PDF ");//alerting user to generate PDF
      var temp1Obj = {};   //object to store data from th user
        temp1Obj["Objective"] = $('form#register input[name="object"]').val(); //storing data from the user using val
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
 var html =
              '<h1 style="background:rgb(36, 35, 35);color:#F8F0F0;text-align:center;font-size:45px;font-family:Verdana">' + temp1Obj.Name + '</h1>'+
              '<p style="text-align:center;font-weight:bold;margin:0;font-size:1.2em;font-family:Arial">'+ 'Mobile :'+ temp1Obj.Mobile  + ' / ' +  ' Email : ' + temp1Obj.Email + '</h4>'+
              '<h3 style="color:#B71427;font-family:Verdana">' + 'PROFESSIONAL SYNOPSIS : ' +'</h3>'+ 
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Objective + '</p>'+ 
              '<h3 style="color:#B71427;font-family:Verdana">' + 'EDUCATIONAL QUALIFICATIONS : ' + '</h3>'+ 
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Duration3 + ' : ' + temp1Obj.Degree + ' from ' + temp1Obj.Institute + ' with ' + temp1Obj.Percentage2 + ' % or CGPA.' +  '</p>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Duration2 + ' : ' + ' 12th Class ' + ' from ' + temp1Obj.College + '('+temp1Obj.Board2+')' + ' with ' + temp1Obj.PUC + ' marks. ' + '</p>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Duration1 + ' : ' + ' 10th Class ' + ' from ' + temp1Obj.Institution + '('+temp1Obj.Board1 +')' +  ' with ' + temp1Obj.SSC + ' marks. ' + '</p>'+
              '<h3 style="color:#B71427;font-family:Verdana">' + ' TECHNICAL SKILLS : ' +'</h3>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Technical + '</p>'+
              '<h3 style="color:#B71427;font-family:Verdana">' + 'PROJECT DETAILS : ' +'</h3>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Project + '</p>'+
              '<h3 style="color:#B71427;font-family:Verdana">' + 'WORKSHOPS ATTENDED : ' +'</h3>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Workshop + '</p>'+
              '<h3 style="color:#B71427;font-family:Verdana">' + 'AREAS OF INTEREST : ' +'</h3>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Interest + '</p>'+
              '<h3 style="color:#B71427;font-family:Verdana">' + 'INTER PERSONAL SKILLS : ' +'</h3>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Personal  + '</p>'+
              '<h3 style="color:#B71427;font-family:Verdana">' + 'HOBBIES AND INTERESTS : ' +'</h3>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Hobbies + '</p>'+
              '<h3 style="color:#B71427;font-family:Verdana">' + 'EXTRA-CURRICULAR ACTIVITIES : ' +'</h3>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + temp1Obj.Activity + '</p>'+
              '<h3 style="color:#B71427;font-family:Verdana">' + 'EMPLOYMENT DETAILS : ' +'</h3>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + ' Job Title : ' + temp1Obj.Job + '</p>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + ' Company  : ' + temp1Obj.Company + '</p>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + ' Start Date : ' + temp1Obj.Start + '</p>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + ' End Date : ' + temp1Obj.End + '</p>'+
              '<h3 style="color:#B71427;font-family:Verdana">' + 'PERSONAL DETAILS : ' +'</h3>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + ' Date of Birth : ' + temp1Obj.Birth + '</p>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + "Father's Name : " + temp1Obj.Father + '</p>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + 'Gender : ' + temp1Obj.Gender + '</p>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + ' Languages Known : ' + temp1Obj.Language + '</p>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + ' Contact Address : ' +  temp1Obj.Door_No  + ' , ' + temp1Obj.City + '<br/>' + temp1Obj.State + '</p>'+
              '<p style="font-size:1.2em;font-family:Garamond">' + ' Website  : ' + temp1Obj.Webiste + '</p>'

                var wnd = window.open("about:blank", "" ); //Variable is created for window.open method
                wnd.document.write(html); //calling the variable to write html in new page
        //return html;




}// End of fucntion
