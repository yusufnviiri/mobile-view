// desktop popup

var sectionWrap = document.querySelector(".sectionWrap");
var deskHeading = document.querySelector(".deskHeading");
var deskList1 = document.querySelector(".deskList1");
var deskList2 = document.querySelector(".deskList2");
var deskList3 = document.querySelector(".deskList3");
var deskList4 = document.querySelector(".deskList4");
var deskpara = document.querySelector(".deskpara");
var deskListA = document.querySelector(".deskListA");
var deskListB = document.querySelector(".deskListB");
var deskListC = document.querySelector(".deskListC");
var deskListD = document.querySelector(".deskListD");
var deskListE = document.querySelector(".deskListE");
var deskListF = document.querySelector(".deskListF");
var deskListG = document.querySelector(".deskListG");
var seeLive = document.querySelector("#seeLive");
var seeSource = document.querySelector("#seeSource");
var liveLink = document.querySelector("#liveLink");
var sourceLink = document.querySelector("#sourceLink");
var deskImag = document.querySelector('.deskImag');
let paragragh = ` Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it 1960s with
the releaLorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it 1960s
with the releorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum han printer took a
galley of type and scrambled it 1960s with the releawn
printer took a galley of type and scrambled it 1960s with
the releaLorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it 1960s
with the release.`;

var projects = ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'];
sourceLink.href = 'https://github.com/yusufnviiri/mobile-view.git';
liveLink.href = 'https://yusufnviiri.github.io/mobile-view/';

function showTonicDesk() {
              sectionWrap.style.display = "block";
              deskHeading.innerHTML = tonic.deskHeading;
              deskList1.innerHTML = tonic.deskList1;
              deskList2.innerHTML = tonic.deskList2;
              deskList3.innerHTML = tonic.deskList3;
              deskpara.innerHTML = paragragh;
              deskListA.innerHTML = projects[0];
              deskListB.innerHTML = projects[1];
              deskListC.innerHTML = projects[2];
              deskListD.innerHTML = projects[3];
              deskListE.innerHTML = projects[4];
              deskListF.innerHTML = projects[5];
              deskImag.src = tonic.deskImag;

}
function closeTonicDesk() {
              sectionWrap.style.display = "none ";
              tonicDesk.style.margin = "auto";
              sectionWrap.style.top = "0%";
}

const tonic = {
              deskHeading: "Tonic",
              deskList1: "Cannopy",
              deskList2: "Back End Dev",
              deskList3: "2015",
              deskImag: 'images/tonic1.png'
};

function showFacebookDesk() {
              sectionWrap.style.display = "block";
              deskHeading.innerHTML = Facebook.deskHeading;
              deskList1.innerHTML = Facebook.deskList1;
              deskList2.innerHTML = Facebook.deskList2;
              deskList3.innerHTML = Facebook.deskList3;
              deskpara.innerHTML = paragragh;

              deskImag.src = Facebook.deskImag;

}
const Facebook = {
              deskHeading: "Facebook 360",
              deskList1: "FACEBOOK",
              deskList2: "Full Stack Dev",
              deskList3: "2015",
              deskImag: 'images/portcard.png'
};
function showMultiPostDesk() {
              sectionWrap.style.display = "block";
              deskHeading.innerHTML = multiPost.deskHeading;
              deskList1.innerHTML = multiPost.deskList1;
              deskList2.innerHTML = multiPost.deskList2;
              deskList3.innerHTML = multiPost.deskList3;
              deskpara.innerHTML = paragragh;
              deskImag.src = multiPost.deskImag;

}
const multiPost = {
              deskHeading: "Multi-post stories",
              deskList1: "FACEBOOK",
              deskList2: "Full Stack Dev",
              deskList3: "2015",
              deskImag: 'images/multi2.png'
};

function showUberDesk() {
              sectionWrap.style.display = "block";
              deskHeading.innerHTML = uber.deskHeading;
              deskList1.innerHTML = uber.deskList1;
              deskList2.innerHTML = uber.deskList2;
              deskList3.innerHTML = uber.deskList3;
              deskpara.innerHTML = paragragh;
              deskImag.src = uber.deskImag;

}
const uber = {
              deskHeading: "Uber Navigation",
              deskList1: "Uber",
              deskList2: "Lead Developer",
              deskList3: "2018",


              deskImag: 'images/uber2.png'
};