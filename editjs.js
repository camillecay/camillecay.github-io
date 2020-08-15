


// authentication
function login(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log("user signed in!");
        document.getElementById("logincontainer").style.display = 'none';
        document.getElementById("container").style.display = 'block';
        document.getElementById("navibar").style.display = 'block';
        document.getElementById("arrow").style.display = 'block';


        var user = firebase.auth().currentUser;
        if(user!=null) {
            console.log(user.email);
        }
    }).catch(function(err){
        if (err.code == "auth/wrong-password"){
            alert("Wrong Password!");
        }else{
            alert(err.message);
        }
    })
}

    document.getElementById("loginForm").addEventListener('click',function(e){
        e.preventDefault();
    });
    


// hide content on login page
function hideContent(){
    document.getElementById("container").style.display = 'none';
    document.getElementById("navibar").style.display = 'none';
    document.getElementById("arrow").style.display = 'none';
}



// read and delete educ content
    let educContent = document.querySelector("#educContent");
    function readEduc(){
        document.getElementById("educContent").innerHTML = '';
            db.collection('educations').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    let educ_div = document.createElement('div');
                    educ_div.classList.add("educData");
                    educ_div.setAttribute('id', doc.id);

                let Eschool = document.createElement('div');
                    Eschool.classList.add("Eschool");
                    Eschool.textContent = doc.data().school;

                let Edegree = document.createElement('div');
                    Edegree.classList.add("Edegree");
                    Edegree.textContent = doc.data().degree;

                let Eyear_start = document.createElement('div');
                    Eyear_start.classList.add("Eyear_start");
                    Eyear_start.textContent = doc.data().year_start;

                let Eyear_end = document.createElement('div');
                    Eyear_end.classList.add("Eyear_end");
                    Eyear_end.textContent = doc.data().year_end;

                let delButton = document.createElement('div');
                    delButton.classList.add("delButton");
                    delButton.textContent= 'x';
            

                educ_div.appendChild(Eschool);
                educ_div.appendChild(Edegree);       
                educ_div.appendChild(Eyear_start);
                educ_div.appendChild(Eyear_end);
                educ_div.appendChild(delButton);

                educContent.appendChild(educ_div);

                    delButton.addEventListener('click', (event) => {
                        event.stopPropagation();
                        let getid = event.target.parentElement.getAttribute('id');
                        db.collection('educations').doc(getid).delete().then(function(doc){
                            readEduc();
                        });
                        
                    })
                })
            })
    }

    readEduc();



// read and delete org content
    let orgContent = document.querySelector("#orgContent");
    function readOrg(){

        document.getElementById("orgContent").innerHTML = '';
        db.collection('organizations').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
            let org_div = document.createElement('div');
                org_div.classList.add("orgData");
                org_div.setAttribute('id', doc.id);
    
            let Oname = document.createElement('div');
            Oname.classList.add("Oname");
            Oname.textContent = doc.data().name;
    
            let Oposition = document.createElement('div');
            Oposition.classList.add("Oposition");
            Oposition.textContent = doc.data().position;
    
            let Oyear_start = document.createElement('div');
            Oyear_start.classList.add("Oyear_start");
            Oyear_start.textContent = doc.data().year_start;
    
            let Oyear_end = document.createElement('div');
            Oyear_end.classList.add("Oyear_end");
            Oyear_end.textContent = doc.data().year_end;
    
            let delButton = document.createElement('div');
                delButton.classList.add("delButton");
                delButton.textContent= 'x';
          
    
                org_div.appendChild(Oname);
                org_div.appendChild(Oposition);       
                org_div.appendChild(Oyear_start);
                org_div.appendChild(Oyear_end);
                org_div.appendChild(delButton);
    
            orgContent.appendChild(org_div);
    
            delButton.addEventListener('click', (event) => {
                event.stopPropagation();
                let getid = event.target.parentElement.getAttribute('id');
                db.collection('organizations').doc(getid).delete().then(function(doc){
                    readOrg();
                });
                
            })

            })
        })
    }

    readOrg();


// read and delete work content
    let workContent = document.querySelector("#workContent")
    function readWork(){

        document.getElementById("workContent").innerHTML ='';


        db.collection('works').get().then(snapshot => {
            snapshot.docs.forEach(doc => {

            let work_div = document.createElement('div');
                work_div.classList.add("workData");
                work_div.setAttribute('id', doc.id);
    
            let Wname = document.createElement('div');
                Wname.classList.add("Wname");
                Wname.textContent = doc.data().name;
    
            let Wyear_start = document.createElement('div');
                Wyear_start.classList.add("Wyear_start");
                Wyear_start.textContent = doc.data().year_start;
    
            let Wyear_end = document.createElement('div');
                Wyear_end.classList.add("Wyear_end");
                Wyear_end.textContent = doc.data().year_end;

            let Wlink = document.createElement('a');
                Wlink.classList.add("Wlink");
                Wlink.setAttribute('href', doc.data().workLink);
                Wlink.setAttribute('target', '_blank');
                Wlink.textContent = 'Check it out here!';
    
            let delButton = document.createElement('div');
                delButton.classList.add("delButton");
                delButton.textContent= 'x';
          
    
                work_div.appendChild(Wname);    
                work_div.appendChild(Wyear_start);
                work_div.appendChild(Wyear_end);
                work_div.appendChild(document.createElement('br'));
                work_div.appendChild(Wlink); 
                work_div.appendChild(delButton);
    
            workContent.appendChild(work_div);
    
                delButton.addEventListener('click', (event) => {
                    event.stopPropagation();
                    let getid = event.target.parentElement.getAttribute('id');
                    db.collection('works').doc(getid).delete().then(function(doc){
                        readWork();
                    })
                    
                })
            })
            
        })
        
    }

    readWork();


// read and delete hobby content
    let hobbyContent = document.querySelector("#hobbyContent")
    function readHobby(){

        document.getElementById("hobbyContent").innerHTML ='';
    db.collection('hobbies').get().then(snapshot => {
        snapshot.docs.forEach(doc => {

            let hobby_div = document.createElement('div');
            hobby_div.classList.add("hobbyData");
            hobby_div.setAttribute('id', doc.id);

            let hobby = document.createElement('div');
                hobby.classList.add("hobby");
                hobby.textContent = doc.data().hobby;

                let delButton = document.createElement('div');
                delButton.classList.add("delButton");
                delButton.textContent= 'x';

                hobby_div.appendChild(hobby);
                hobby_div.appendChild(delButton);
                hobbyContent.appendChild(hobby_div);
 
               


                delButton.addEventListener('click', (event) => {
                    event.stopPropagation();
                    let getid = event.target.parentElement.getAttribute('id');
                    db.collection('hobbies').doc(getid).delete().then(function(){
                        readHobby();
                    });
                    
                })
        })
    })
}

    readHobby();

// read and refresh introduction desc
    let introContent = document.querySelector("#introContent")
    function readIntro(){

        document.getElementById("introContent").innerHTML ='';
    db.collection('introductions').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            // readIntro(doc);

            let intro_div = document.createElement('div');
            intro_div.classList.add("introData");
            intro_div.setAttribute('id', doc.id);
        
            let intro = document.createElement('div');
                intro.classList.add("intro");
                intro.textContent = doc.data().fact;

                intro_div.appendChild(intro);
                introContent.appendChild(intro_div);
 
                let refresh = document.createElement('div');
                refresh.textContent= '';
                refresh.addEventListener('click', (event) => {
                    event.stopPropagation();
                    let getid = event.target.parentElement.getAttribute('id');
                    db.collection('introductions').doc(getid).delete();
                    readIntro();
                })
        })
    })
}
    readIntro();


// add new educ content
    const addEducForm = document.querySelector('#addEducForm');

    addEducForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        db.collection('educations').add({
            school: addEducForm.educAddschool.value,
            degree: addEducForm.educAdddegree.value,
            year_start: addEducForm.educAddstart.value,
            year_end: addEducForm.educAddend.value

            
        }).then(function(doc){
            console.log('item added w ID: ' + doc.id);
            readEduc();

        })

        document.getElementById("educAddschool").value = ''
        document.getElementById("educAdddegree").value = ''
        document.getElementById("educAddstart").value = ''
        document.getElementById("educAddend").value = ''
    })


// add new work content
    const addWorkForm = document.querySelector('#addWorkForm');

    addWorkForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        db.collection('works').add({
            name: addWorkForm.workAddname.value,
            workLink: addWorkForm.workAddlink.value,
            year_start: addWorkForm.workAddstart.value,
            year_end: addWorkForm.workAddend.value
        }).then(function(doc){
            console.log('item added w ID: ' + doc.id);
            readWork();
        })

        document.getElementById("workAddname").value = ''
        document.getElementById("workAddstart").value = ''
        document.getElementById("workAddend").value = ''
  
    })


// add new org content
    const addOrgForm = document.querySelector('#addOrgForm');

    addOrgForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        db.collection('organizations').add({
            name: addOrgForm.orgAddname.value,
            position: addOrgForm.orgAddposition.value,
            year_start: addOrgForm.orgAddstart.value,
            year_end: addOrgForm.orgAddend.value
        }).then(function(doc){
            console.log('item added w ID: ' + doc.id);
            readOrg();
        })

        document.getElementById("orgAddname").value = ''
        document.getElementById("orgAddposition").value = ''
        document.getElementById("orgAddstart").value = ''
        document.getElementById("orgAddend").value = ''
    })


// add new hobbies content
    const addHobbyForm = document.querySelector('#addHobbyForm');

    addHobbyForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        db.collection('hobbies').add({
            hobby: addHobbyForm.hobbyAddname.value
        }).then(function(doc){
            console.log('item added w ID: ' + doc.id);
            readHobby();

        })

        document.getElementById("hobbyAddname").value = '';

    })



// edit intro desc
    const editIntroForm = document.querySelector('#editIntroForm');

    editIntroForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        db.collection('introductions').doc('desc').update({
            fact: editIntroForm.introEditFact.value,
        }).then(function(){
            console.log("oks na");
            readIntro();
        })
        document.getElementById("introEditFact").value = ''
        
    })


// edit contact links
   function goTwitter() {
    db.collection('links').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            if(doc.id == 'twitter')
                window.open(doc.data().twitter, "");
            else
                console.log("")
            
        })
    })
}
    const editLinkFormTwitter = document.querySelector('#editLinkFormTwitter');   
    editLinkFormTwitter.addEventListener('click', (event) =>{
        event.preventDefault();
        db.collection('links').doc('twitter').update({
            twitter: editLinkFormTwitter.linkEditTwitter.value,
        }).then(function(){
       
            
        })
        document.getElementById("linkEditTwitter").value = ''
        
    })
    


    function goGithub() {
        db.collection('links').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                if(doc.id == 'github')
                    window.open(doc.data().github, "");
                
                else
                    console.log("")
                
            })
        })
    }


    const editLinkFormGithub = document.querySelector('#editLinkFormGithub');
    editLinkFormGithub.addEventListener('click', (event) =>{
        event.preventDefault();
        db.collection('links').doc('github').update({
            github: editLinkFormGithub.linkEditGithub.value,
        }).then(function(){
    
        })
        document.getElementById("linkEditGithub").value = ''
    })

   


    function goLinkedin() {
        db.collection('links').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                if(doc.id == 'linkedin')
                    window.open(doc.data().linkedin, "");
                else
                    console.log("")
                
            })
        })
        
    }
    
    const editLinkFormLinkedin = document.querySelector('#editLinkFormLinkedin');
    editLinkFormLinkedin.addEventListener('click', (event) =>{
        event.preventDefault();

    
        db.collection('links').doc('linkedin').update({
            linkedin: editLinkFormLinkedin.linkEditLinkedin.value,
        }).then(function(){
     
        })
        document.getElementById("linkEditLinkedin").value = ''   
    })
   

//opening side bar
function educopenNav() {
    document.getElementById("educsideBar").style.width = "450px";
    changeValEduc();
}

function educcloseNav() {
    document.getElementById("educsideBar").style.width = "0";
    changeValEduc();
  }
  


function orgopenNav() {
    document.getElementById("orgsideBar").style.width = "450px";

}

function orgcloseNav() {
    document.getElementById("orgsideBar").style.width = "0";
  }



  function workopenNav() {
    document.getElementById("worksideBar").style.width = "450px";
 

}

function workcloseNav() {
    document.getElementById("worksideBar").style.width = "0";
  }
  


  function introopenNav() {
    document.getElementById("introsideBar").style.width = "450px";

}

function introcloseNav() {
    document.getElementById("introsideBar").style.width = "0";
  }


  function linkopenNav() {
    document.getElementById("linksideBar").style.width = "450px";

}

function linkcloseNav() {
    document.getElementById("linksideBar").style.width = "0";
  }


function hobbyopenNav() {
    document.getElementById("hobbysideBar").style.width = "450px";

}

function hobbycloseNav() {
    document.getElementById("hobbysideBar").style.width = "0";
  }


  // arrow
  function redarrow(){ 
    document.getElementById('arrow').style.display = 'block';
}

function rednoarrow(){ 
    document.getElementById('arrow').style.display = 'none';
}
