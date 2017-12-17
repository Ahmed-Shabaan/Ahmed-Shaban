var bio ={
    "name":"Ahmed Shaban AbdElmoity",
    "role":"Web Developer",
    "contacts":{
        "mobile":"01018114451",
        "email":"akaka4005@gmail.com",
        "github":"ahmedshaban2018",
        "twitter":"@ahmedshaban",
        "location":"Egypt"
    },
    "welcomeMessage":"I'am a student at faculty of computers and information ,"+
                     "and i'am a web developer and i work in this field as a freelancer ."+
                      " I love programming and i hope work at google or udacity in the future .",
    "skills":[
        "C++","JAVA","Photoshop","HTML4/5","CSS1/2/3","JavaScript","In Design","Ajax","jQuery","bootstrap"
        ],
    "biopic":"images/Ahmed.jpg",
    
};
bio.display=function(){
	var d="%data%";
    	var fName=HTMLheaderName.replace(d,bio.name);
        var fRole=HTMLheaderRole.replace(d,bio.role);

        //contacts
        var fContacts=[];
    	fContacts.push(HTMLmobile.replace(d,bio.contacts.mobile));
    	fContacts.push(HTMLemail.replace(d,bio.contacts.email));
    	fContacts.push(HTMLgithub.replace(d,bio.contacts.github));
    	fContacts.push(HTMLtwitter.replace(d,bio.contacts.twitter));
    	fContacts.push(HTMLlocation.replace(d,bio.contacts.location));

    	var fWelcomeMessage=HTMLwelcomeMsg.replace(d,bio.welcomeMessage);
    	var fPic=HTMLbioPic.replace(d,bio.biopic);


    	//append information
            
           //bioinfo
    	   $("#header").prepend(fRole);
    	   $("#header").prepend(fName);

    	   //contacts
    	   for (var i=0;i<fContacts.length;i++){
    	   	$("#topContacts").append(fContacts[i]);
    	   	$("#footerContacts").append(fContacts[i]);
    	   }

    	   //biography Picture
    	   $("#header").append(fPic);


    	   //wellcome message
    	   $("#header").append(fWelcomeMessage);

           //Skills
    	   if (bio.skills.length>0){
    	   	$("#header").append(HTMLskillsStart);

    	   	for(var s=0;s<bio.skills.length;s++){
    	   		$("#skills").append(HTMLskills.replace(d,bio.skills[s]));

    	   	}


    	   }

};

//call function
bio.display();

//work object
var work={
    "jobs":[
        {
            "employer":"New Tic",
            "title":"Desktop applications developer",
            "location":"Cairo, EG",
            "dates":"jun 2016-future",
            "description":"I work a desktop applications developer at New Tic in cairo . "+
                          "I develop the desktop applications and any Systems needed and i "+
                          "create the design of applications using visual studio and Photoshop . "+
                          "i work in this company from begining of last year to now , and i "+
                          " hope work in Multinational company ."
        },
        {
            
            "employer":"Media Group",
            "title":"web developer",
            "location":"Minia, EG",
            "dates":"2015-Feb,25 2016",
            "description":"i develop web sites using PHP"+
                          " and design database and control of it"+
                          " and control of web sites .",
        }
        ]
};
//definition of work display function
work.display=function(){
	var d="%data%";
  if (work.jobs.length>0){
		for(var i=0 ;i<work.jobs.length;i++){

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace(d,work.jobs[i].employer)+HTMLworkTitle.replace(d,work.jobs[i].title));
			$(".work-entry:last").append(HTMLworkDates.replace(d,work.jobs[i].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace(d,work.jobs[i].location));
			$(".work-entry:last").append(HTMLworkDescription.replace(d,work.jobs[i].description));
		}
  }
};

//call work display function
work.display();
var projects={
    "projects":[
        {
            "title": "Clinic Managment System",
            "dates":"2014",
            "description":"that project manage all clinic and help doctor to store all information about his patients .",
            "images":[
            "images//clinic1.jpg",
            "images/clinic2.jpg"
            ]
        },
        {
            "title": "Restuarant Managment System ",
            "dates":"2015-may 2016",
            "description":"that project using at Big Restuarant To Manage it "+
                          "and help to store all Meals's data And Costs .",
            "images":[
            "images/rest1.jpg",
            "images/rest2.jpg",
            "images/rest3.jpg"
            ]
        }
        ],

        //definition display function with no argument
        display: function(){
        	var d="%data%";
          if (projects.projects.length>0){
            	for(var i=0;i<projects.projects.length;i++){
            		$("#projects").append(HTMLprojectStart);
            		$(".project-entry:last").append(HTMLprojectTitle.replace(d,projects.projects[i].title));
            		$(".project-entry:last").append(HTMLprojectDates.replace(d,projects.projects[i].dates));
            		$(".project-entry:last").append(HTMLprojectDescription.replace(d,projects.projects[i].description));

            		//append images of project
            		 
                      for (var m = 0; m<projects.projects[i].images.length; m++) {
                           var formattedImage = HTMLprojectImage.replace(d, projects.projects[i].images[m]);

                             $('.project-entry:last').append(formattedImage);
        }
            	}
          }


        }
};
projects.display();
var education={
    "schools":[
        {
            "name":"Samalout secondary school",
            "location":"Minia",
            "degree":"secondary",
            "majors":["Physics","Math","Arabic","English","Fransh"],
            "dates":"2011-jun 2014",
            "url":"http://Smalout.com"
        },
        {
            "name":"Computers and information college ",
            "location":"Minia",
            "degree":"BA",
            "majors":["CS","IS","IT"],
            "dates":"Aug 2014-2018",
            "url":"http://fciminia.com"
        }
        ],
        "onlineCources":[
          {
            "title":"Front End Web Developer Nanodegree",
            "school":"Udacity",
            "dates":"March 2017-September 2017",
            "url":"https://udacity.com/nanodegrees"
          },
          {
            "title":"Html+Css#",
            "school":"Udemy",
            "dates":"2016-Jan 2017",
            "url":"https://miniagovernment.com.eg"
          },
          {
            "title":"Business Intelligence Analyst Mastery Award",
            "school":"IBM",
            "dates":"February,21 2017-February,26 2017",
            "url":"https://IBM.com"
          },
          
          ],
          display:function(){
             var d="%data%";
          	if (education.schools.length>0 || education.onlineCources.length>0){
          		for (var i=0;i<education.schools.length;i++){
          			var fName=HTMLschoolName.replace(d,education.schools[i].name).replace("#",education.schools[i].url);
          			var fDegree=HTMLschoolDegree.replace(d,education.schools[i].degree);
          			var fLocation=HTMLschoolLocation.replace(d,education.schools[i].location);
          			var fDates=HTMLschoolDates.replace(d,education.schools[i].dates);
        
          			$("#education").append(HTMLschoolStart);
          			$(".education-entry:last").append(fName+fDegree);
          			$(".education-entry:last").append(fLocation);
          			$(".education-entry:last").append(fDates);

          			//append majors of schools
          			for (var m=0;m<education.schools[i].majors.length;m++){
          				var fMajors=HTMLschoolMajor.replace(d,education.schools[i].majors[m]);

          				$(".education-entry:last").append(fMajors);
          			}


          		}

          		//append Online Cources
          			$("#education").append(HTMLonlineClasses);
          			for (var o=0;o<education.onlineCources.length;o++){
          				var fCourceTitle=HTMLonlineTitle.replace(d,education.onlineCources[o].title).replace("#",education.onlineCources[o].url);
          				var fCourceSchool=HTMLonlineSchool.replace(d,education.onlineCources[o].school);
          				var fCourceDates=HTMLonlineDates.replace(d,education.onlineCources[o].dates);
          				var fCourceUrl=HTMLonlineURL.replace(d,education.onlineCources[o].url);

          				//handle JQuery Selector
          				$("#education").append(HTMLschoolStart); 
          				$(".education-entry:last").append(fCourceTitle+fCourceSchool);
          				$(".education-entry:last").append(fCourceDates);
          				$(".education-entry:last").append(fCourceUrl);

          			}
          		}
          }
};
education.display();
$("#mapDiv").append(googleMap);