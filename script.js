const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];




  const workSpansLast = document.querySelectorAll('.info-work h6 span');
  workSpansLast.forEach((workSpanLast , index) => {
   workSpanLast.innerHTML = `${data[index].timeframes.weekly.previous}`
  });

  const workSpans = document.querySelectorAll('.span-work');
    workSpans.forEach((workSpan , index) => {
        workSpan.innerHTML = `${data[index].timeframes.weekly.current}`; 
   });























const dailyButton = document.getElementById('btn1');
const weeklyButton = document.getElementById('btn2');
const monthlyButton = document.getElementById('btn3');

const btns = document.querySelectorAll('.aval button');
const works = document.querySelectorAll('.info-work');
const worksImage = document.querySelectorAll('.aval button img');


// btns.forEach((btn) => {
//     btn.addEventListener('mouseenter' , () => {
//         works.forEach((wark) => {
//             wark.style.backgroundColor = 'hsl(235, 46%, 20%)' ;
//         })
//     })
//     btns.forEach(() => {
//         btn.addEventListener('mouseout' , () => {
//             works.forEach((wark) => {
//                 wark.style.backgroundColor = '' ;
//             })
//         })
//     })
// })

worksImage.forEach((btn) => {
    btn.addEventListener('mouseenter' , () => {
        works.forEach((wark) => {
            wark.style.backgroundColor = 'hsl(235, 46%, 20%)' ;
        })
    })
    worksImage.forEach(() => {
        btn.addEventListener('mouseout' , () => {
            works.forEach((wark) => {
                wark.style.backgroundColor = '' ;
            })
        })
    })
});





dailyButton.addEventListener('click' , () => {
    dailyButton.style.color = 'white';
    weeklyButton.style.color = 'hsl(236, 100%, 87%)';
    monthlyButton.style.color = 'hsl(236, 100%, 87%)';

    const workSpans = document.querySelectorAll('.span-work');
    workSpans.forEach((workSpan , index) => {
        workSpan.innerHTML = `${data[index].timeframes.daily.current}`; 
   })

   const workSpansLast = document.querySelectorAll('.info-work h6 span');
   workSpansLast.forEach((workSpanLast , index) => {
    workSpanLast.innerHTML = `${data[index].timeframes.daily.previous}`
   })
});

weeklyButton.addEventListener('click' , () => {
    dailyButton.style.color = 'hsl(236, 100%, 87%)';
    weeklyButton.style.color = 'white';
    monthlyButton.style.color = 'hsl(236, 100%, 87%)';

    const workSpans = document.querySelectorAll('.span-work');
    workSpans.forEach((workSpan , index) => {
        workSpan.innerHTML = `${data[index].timeframes.weekly.current}`; 
   })

   const workSpansLast = document.querySelectorAll('.info-work h6 span');
   workSpansLast.forEach((workSpanLast , index) => {
    workSpanLast.innerHTML = `${data[index].timeframes.weekly.previous}`
   })
});

monthlyButton.addEventListener('click' , () => {
    dailyButton.style.color = 'hsl(236, 100%, 87%)';
    weeklyButton.style.color = 'hsl(236, 100%, 87%)';
    monthlyButton.style.color = 'white';

    const workSpans = document.querySelectorAll('.span-work');
    workSpans.forEach((workSpan , index) => {
        workSpan.innerHTML = `${data[index].timeframes.monthly.current}`; 
   })

   const workSpansLast = document.querySelectorAll('.info-work h6 span');
   workSpansLast.forEach((workSpanLast , index) => {
    workSpanLast.innerHTML = `${data[index].timeframes.monthly.previous}`
   })
});

