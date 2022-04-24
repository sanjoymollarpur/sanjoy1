work=[
    {
        "img":"images/mimyk.jpg",
        "time":"FEB 2022 - Present",
        "role":"AI Software Developer"
    },
    {
        "img":"images/isi.webp",
        "time":"NOV 2021 - JAN 2022",
        "role":"Project Linked Person"
    }

]

btn1=document.getElementById("btn1")
btn1.addEventListener("click", first1)
i1=1
function first1(){
    title1=document.getElementById("title1")
    se1=document.getElementById("se1")
    img1=document.getElementById("img1")
    //console.log(img1)
    title1.innerText=work[i1].role
    se1.innerText=work[i1].time
    img1.src=work[i1].img
    i1+=1
    i1=i1%work.length
}

work1=[
    {
        "img":"images/iitkgp.jpg",
        "time":"AUG 2021  - NOV 2021",
        "role":"IIT Kharagpur",
        "course":"PHD in Computer Science",
    },
    {
        "img":"images/iitkgp.jpg",
        "time":"JUL 2019 - MAY 2021",
        "role":"IIT Kharagpur",
        "course":"MTech in Computer Science",
    },
    {
        "img":"images/iitbbs1.avif",
        "time":"JUL 2017 - MAY 2019",
        "role":"IIT Bhubaneswar",
        "course":"Msc In Mathematics"
    },
    {
        "img":"images/bu.webp",
        "time":"JUL 2014 - MAY 2017",
        "role":"Suri Vidyasagar College",
        "course":"Bsc In Mathematics"
    },
    {
        "img":"images/mollar.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Mollarpur High School",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/mvs.jpg",
        "time":"Apr 2006 - MAR 2012",
        "role":"Mohula Velian High School",
        "course":"All Subjects according WBBSE"
    },

]

btn2=document.getElementById("btn2")
btn2.addEventListener("click", first2)
i2=1
function first2(){
    title1=document.getElementById("title2")
    se1=document.getElementById("se2")
    img1=document.getElementById("img2")
    cour=document.getElementById("cour")
    title1.innerText=work1[i2].role
    se1.innerText=work1[i2].time
    img1.src=work1[i2].img
    cour.innerText=work1[i2].course
    i2+=1
    i2=i2%work1.length
}


work2=[
    {
        "img":"images/ai.jfif",
        "time":"AUG 2021  - NOV 2021",
        "role":"Artificial Intelligence",
        "course":"PHD in Computer Science",
    },
    {
        "img":"images/math.jpeg",
        "time":"JUL 2019 - MAY 2021",
        "role":"Mathematics",
        "course":"MTech in Computer Science",
    },
    {
        "img":"images/prog.jpg",
        "time":"JUL 2017 - MAY 2019",
        "role":"Programming Languages",
        "course":"Msc In Mathematics"
    },
    {
        "img":"images/excel.png",
        "time":"JUL 2014 - MAY 2017",
        "role":"Microsoft Office",
        "course":"Bsc In Mathematics"
    },
    {
        "img":"images/web.jpeg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
   

]

btn3=document.getElementById("btn3")
btn3.addEventListener("click", first3)
i2=1
function first3(){
    title1=document.getElementById("title3")
    //se1=document.getElementById("se3")
    img1=document.getElementById("img3")
    //cour=document.getElementById("cour")
    title1.innerText=work2[i2].role
    //se1.innerText=work2[i2].time
    img1.src=work2[i2].img
    //cour.innerText=work2[i2].course
    i2+=1
    i2=i2%work2.length
}


work3=[
    {
        "img":"images/i1.jpg",
        "time":"AUG 2021  - NOV 2021",
        "role":"Artificial Intelligence",
        "course":"PHD in Computer Science",
    },
    {
        "img":"images/i2.jpg",
        "time":"JUL 2019 - MAY 2021",
        "role":"Mathematics",
        "course":"MTech in Computer Science",
    },
    {
        "img":"images/i3.jpg",
        "time":"JUL 2017 - MAY 2019",
        "role":"Programming Languages",
        "course":"Msc In Mathematics"
    },
    {
        "img":"images/i4.jpg",
        "time":"JUL 2014 - MAY 2017",
        "role":"Microsoft Office",
        "course":"Bsc In Mathematics"
    },
    {
        "img":"images/i5.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/i6.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/i7.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/i8.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/i9.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/i10.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/i11.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/i12.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/i13.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/i14.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
    {
        "img":"images/i15.jpg",
        "time":"APR 2012 - MAR 2014",
        "role":"Web Development",
        "course":"Science(PCMB)"
    },
   

]

btn4=document.getElementById("btn4")
btn4.addEventListener("click", first4)
i2=1
function first4(){
   // title1=document.getElementById("title4")
    //se1=document.getElementById("se3")
    img1=document.getElementById("img4")
    //cour=document.getElementById("cour")
    //title1.innerText=work3[i2].role
    //se1.innerText=work2[i2].time
    img1.src=work3[i2].img
    //cour.innerText=work2[i2].course
    i2+=1
    i2=i2%work3.length
}