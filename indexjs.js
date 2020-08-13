

//GETTING DATA
let educContent = document.querySelector("#educContent")
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

   
        

            educ_div.appendChild(Eschool);
            educ_div.appendChild(Edegree);       
            educ_div.appendChild(Eyear_start);
            educ_div.appendChild(Eyear_end);
    

            educContent.appendChild(educ_div);

         
            })
        })
}

readEduc();



//get org content
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

      

            org_div.appendChild(Oname);
            org_div.appendChild(Oposition);       
            org_div.appendChild(Oyear_start);
            org_div.appendChild(Oyear_end);


        orgContent.appendChild(org_div);

        
        })
    })
}

readOrg();

// get data works

let workContent = document.querySelector("#workContent")
function readWork(){

    document.getElementById("workContent").innerHTML ='';
    db.collection('works').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            // readWork(doc);

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


      

            work_div.appendChild(Wname);       
            work_div.appendChild(Wyear_start);
            work_div.appendChild(Wyear_end);
   

        workContent.appendChild(work_div);

        })
    })
}

readWork();


// hobby 
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
            hobby_div.appendChild(hobby);
     
            hobbyContent.appendChild(hobby_div);  
    })
})
}

readHobby();



let introContent = document.querySelector("#introContent")
function readIntro(){

    document.getElementById("introContent").innerHTML ='';
db.collection('introductions').get().then(snapshot => {
    snapshot.docs.forEach(doc => {

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

// arrow
    function redarrow(){ 
        document.getElementById('arrow').style.display = 'block';
    }

    function rednoarrow(){ 
        document.getElementById('arrow').style.display = 'none';
    }
