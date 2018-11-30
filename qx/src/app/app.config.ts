export const welcomeMap = {
  none: 'welcomea',
  one: 'welcomeb',
  all: 'welcomec'
};
export const allMessages = {
  'pageRouting': 'page:routing',
};
export const email = 'capitalch@gmail.com';
export const phone = '9382749506';
export const sutterHealthUrl = 'https://www.google.co.in/';
export const reviewPageDelay = 1000;
export const navMap = {
  q1a: {
    name: 'Q1.1',
    descr1: `The first set of questions ask about your hobby.`,
    descr2: `Please do your best to pick an answer from the choices that are offered.
    You may skip any questions you don’t want to answer.
   Just keep in mind that we may not be able to calculate your score if you skip questions.`,
    text: `Which of the following is the hobby you are passionate about?`,
    jumpTo: 'q4',
    progress: 0,
    weight: 0,
    jumpBack: 'start',
    edss: 'Yes',
    deleteItems: ['Q1.2', 'Q2', 'Q1.3', 'Q1.4.1', 'Q1.4.2', 'Q1.4.3', 'Q1.4.4'],
    options: [
      {
          text: `I don't have any hobby`,
          score: 0,
          jumpTo: 'q4',
      }, {
          text: `Others`,
          score: 1,
          jumpTo: 'q1b',
      }, {
          text: `I am into sports`,
          score: 2,
          jumpTo: 'q2',
      }, {
          text: `I am into music`,
          score: 3,
          jumpTo: 'q2',
      }
  ],
    type: 'radio',
    answer: '',
  },
  q1b: {
    text: `Your hobby is in which sector?`,
    name: 'Q1.2',
    jumpTo: 'q4',
    progress: 5,
    weight: 1,
    jumpBack: '',
    edss: 'Yes',
    skipLogic: true,
    deleteItems: ['Q2', 'Q1.3', 'Q1.4'],
    options: [
      {
          text: `Collecting (stamps,coins)`,
          score: 1,
          jumpTo: 'q2'
      }, {
          text: `Puzzle Solving`,
          score: 2,
          jumpTo: 'q2'
      }, {
          text: `Crafting`,
          score: 3,
          jumpTo: 'q2'
      }, {
          text: `Travelling`,
          score: 4,
          jumpTo: 'q1d'
      }, {
          text: `Adventure Sports`,
          score: 5,
          jumpTo: 'q1c'
      }
   ],
    type: 'radio',
    answer: '',
  },
  q1c: {
    text: `Please select the adventure sport: `,
    progress: 7,
    name: 'Q1.3',
    jumpTo: 'q4',
    weight: 2,
    jumpBack: '',
    edss: 'Yes',
    skipLogic: true,
    options: [
      {
          text: `Paragliding`,
          score: 1,
          jumpTo: 'q1d',
      }, {
          text: `Bungee Jumping`,
          score: 2,
          jumpTo: 'q1d',
      }, {
          text: `Kayaking`,
          score: 3,
          jumpTo: 'q1d',
      }
  ],
    type: 'radio',
    answer: '',
  },
  q1d: {
    text: `How much have you travelled?`,
    name: 'Q1.4',
    jumpTo: 'q4',
    progress: 9,
    weight: 3,
    jumpBack: '',
    type: 'selectOptions',
    edss: 'Yes',
    skipLogic: true,
    sub: [
      {
          text: `Covered % of your home state`,
          name: 'Q1.4.1',
          score: 1,
          jumpTo: 'q2',
          value: ''
      },
      {
          text: `Covered % of your country`,
          name: 'Q1.4.2',
          score: 1,
          jumpTo: 'q2',
          value: ''
      },
      {
          text: `Covered % of your continent`,
          name: 'Q1.4.3',
          score: 1,
          jumpTo: 'q2',
          value: ''
      },
      {
          text: `Covered % of the world`,
          name: 'Q1.4.4',
          score: 1,
          jumpTo: 'q2',
          value: ''
      },
    ],
      selectOptions: [
          '0%',
          '10%',
          '20%',
          '30%',
          '40%',
          '50%',
          '60%',
          '70%',
          '80%',
          '90%',
          '100%'
      ]
  },
  q2: {
    text: `How long are you following your hobby?`,
    name: 'Q2',
    progress: 12,
    jumpTo: 'q4',
    weight: 4,
    jumpBack: '',
    edss: 'Yes',
    skipLogic: true,
    options: [
      {
          text: `Just started`,
          score: 0,
      }, {
          text: `For the last 1 year`,
          score: 1,
      }, {
          text: `For the last 5 years`,
          score: 2,
      }, {
          text: `For the last 10 years`,
          score: 3,
      }, {
          text: 'Since childhood',
          score: 4,
      }
  ],
    type: 'radio',
    answer: '',
  },
  q4: {
    descr1: ``,
    descr2: ``,
    progress: 16,
    name: 'Q4',
    weight: 5,
    jumpBack: '',
    edss: 'Yes',
    text: 'How many languages do you speak?',
    jumpTo: 'q5',
    type: 'table',
    commonOptions: [
      {
          text: `Read`,
          score: 1,
          checked: false
      }, {
          text: `Write`,
          score: 1,
          checked: false
      }, {
          text: `Speak`,
          score: 1,
          checked: false
      }, {
          text: `Read & Speak`,
          score: 2,
          checked: false
      }, {
          text: `Read & Write`,
          score: 2,
          checked: false
      }, {
          text: `Write & Speak`,
          score: 2,
          checked: false
      }
      , {
          text: `Read, Write & Speak`,
          score: 3,
          checked: false
      }
  ],
  sub: [
      {
          text: `English`,
          name: 'Q4.1',
      }, {
          text: `German`,
          name: 'Q4.2',
      }, {
          text: `Japanese`,
          name: 'Q4.3',
      }, {
          text: `French`,
          name: 'Q4.4',
      }
  ],
    answer: '',
  },
  q5: {
    text: `Select your score in the following subjects: `,
    jumpTo: 'q6',
    progress: 18,
    name: 'Q5',
    weight: 6,
    jumpBack: '',
    edss: 'Yes',
    type: 'table',
    answer: '',
    commonOptions: [
      {
          text: `>40`,
          score: 0,
          checked: false
      }, {
          text: `>50`,
          score: 1,
          checked: false
      }, {
          text: `>60`,
          score: 2,
          checked: false
      }, {
          text: `>70`,
          score: 3,
          checked: false
      }, {
          text: `>80`,
          score: 4,
          checked: false
      }
      , {
          text: `<80`,
          score: 5,
          checked: false
      }
  ],
  sub: [
      {
          text: `Maths`,
          name: 'Q5.1',
      }, {
          text: `Physics`,
          name: 'Q5.2',
      }, {
          text: `Chemistry`,
          name: 'Q5.3',
      }, {
          text: `Computer Science`,
          name: 'Q5.4',
      }
  ]
  },
  q6: {
    text: `Select the level of interest you have in the following fields`,
    header: `Interest`,
    type: 'header',
    name: 'Q6',
    weight: 7,
    jumpBack: '',
    jumpTo: 'q7',
    progress: 22,
    edss: 'Yes',
    answer: '',
    commonOptions: [
      {
          text: `Not at all`,
          score: 0,
          checked: false
      }, {
          text: `A little`,
          score: 1,
          checked: false
      }, {
          text: `Moderate`,
          score: 2,
          checked: false
      }, {
          text: `Very`,
          score: 3,
          checked: false
      }
  ],
  sub: [
      {
          text: `Computer Programming`,
          name: 'Q6.1',
      }, {
          text: `Hacking`,
          name: 'Q6.2',
      }, {
          text: `Management`,
          name: 'Q6.3',
      }, {
          text: `Artificial Intelligence`,
          name: 'Q6.4',
      }
  ]
  },
  q7: {
    division: true,
    jumpTo: 'q8',
    name: 'Q7',
    weight: 8,
    jumpBack: '',
    progress: 26,
    edss: 'Yes',
    type: 'division',
    answer: '',
    sub: [
      {
          text: `Which quality describe you the best?`,
          name: 'Q7.1',
          options: [
              {
                  text: `Good looking`,
                  score: 0,
              }, {
                  text: `Career Oriented`,
                  score: 1,
              }, {
                  text: `Motivated`,
                  score: 2,
              }, {
                  text: `Compassionate`,
                  score: 3,
              }
          ],
          answer: '',
      }, {
          text: `How do you control your anger?`,
          name: 'Q7.2',
          options: [
              {
                  text: `I vent it out`,
                  score: 0,
              }, {
                  text: `Move away from the situation`,
                  score: 1,
              }, {
                  text: `Take a deep breath`,
                  score: 2,
              }, {
                  text: `Meditate`,
                  score: 3,
              }, {
                  text: `I need help to hold my balance`,
                  score: 3,
              }
          ],
          answer: '',
      }, {
          text: `What quality in a person attracts you most?`,
          name: 'Q7.3',
          options: [
              {
                  text: `Beauty`,
                  score: 0,
              }, {
                  text: `Strength`,
                  score: 1,
              }, {
                  text: `Focus`,
                  score: 2,
              }, {
                  text: `Knowledge`,
                  score: 3,
              }, {
                  text: `Empathy`,
                  score: 4,
              }
          ],
          answer: '',
      }
  ]
  },
  q8: {
    text: `Are you having any of these medical conditions?`,
    jumpTo: 'q9',
    progress: 30,
    name: 'Q8',
    weight: 9,
    jumpBack: '',
    edss: 'Yes',
    type: 'table',
    answer: '',
    commonOptions: [
      {
          text: `Yes`,
          score: 0,
          checked: false
      }, {
          text: `No`,
          score: '1',
          checked: false
      }
      ],
      sub: [
          {
              text: `Asthma`,
              name: 'Q8.1',
          }, {
              text: `Severe Allergy`,
              name: 'Q8.2',
          }, {
              text: `Heart Problems`,
              name: 'Q8.3'
          }, {
              text: `Kidney Problems`,
              name: 'Q8.4'
          }, {
              text: `AIDS`,
              name: 'Q8.5'
          }
      ]
      },
  q9: {
    text: `Are you on any of these medications for more than a year?`,
    jumpTo: 'q10',
    name: 'Q9',
    progress: 34,
    weight: 10,
    jumpBack: '',
    edss: 'Yes',
    type: 'table',
    answer: '',
    commonOptions: [
      {
          text: `Yes`,
          score: 0,
          checked: false
      }, {
          text: `No`,
          score: 1,
          checked: false
      }
  ],
  sub: [
      {
          text: `Betamethasone`,
          name: 'Q9.1'
      }, {
          text: `Budesonide`,
          name: 'Q9.2'
      }, {
          text: `Cortisone`,
          name: 'Q9.3'
      }, {
          text: `Dexamethasone`,
          name: 'Q9.4'
      }
  ]
  },
  q10: {
    text: `Have you played any of these sports in state/national/international level?`,
    jumpTo: 'q11',
    name: 'Q10',
    progress: 38,
    weight: 11,
    jumpBack: '',
    edss: 'Yes',
    type: 'table',
    answer: '',
    commonOptions: [
      {
          text: `Yes`,
          score: 1,
          checked: false
      }, {
          text: `No`,
          score: 0,
          checked: false
      }
  ],
  sub: [
      {
          text: `Cricket`,
          name: 'Q10.1'
      }, {
          text: `Soccer`,
          name: 'Q10.2'
      }, {
          text: `Badminton`,
          name: 'Q10.3'
      }, {
          text: `Basketball`,
          name: 'Q10.4'
      }, {
          text: `Ice Hockey`,
          name: 'Q10.5'
      }
  ]
  },
  q11: {
    text: `Select the facilities you need in our institute`,
    jumpTo: 'q12',
    name: 'Q11',
    progress: 42,
    section: true,
    weight: 12,
    jumpBack: '',
    edss: 'Yes',
    type: 'sub2',
    answer: '',
    commonOptions: [
      {
          text: `Yes`,
          score: 1,
          checked: false
      }, {
          text: `No`,
          score: 0,
          checked: false
      }
  ],
  sub: [
      {
          text: `Digital Study Material`,
          name: 'Q11.1'
      }, {
          text: `Library`,
          name: 'Q11.1'
      }, {
          text: `Computer Lab`,
          name: 'Q11.1'
      }
  ],
  sub2: [
      {
          text: `How you came to know about our institute?`,
          name: 'Q11.3',
          options: [
              {
                  text: `Word of mouth`,
                  score: 0
              }, {
                  text: `Television Ad`,
                  score: 1
              }, {
                  text: `Newspaper`,
                  score: 1
              }
          ],
          answer: '',
      }
  ]
  },
  q12: {
    text: `What's next after KBJ, LCK, MDL, NEM`,
    jumpTo: 'q13',
    progress: 46,
    name: 'Q12',
    weight: 13,
    jumpBack: '',
    edss: 'Yes',
    answer: '',
    options: [
      {
          text: `OEP`,
          score: 0,
          checked: false
      }, {
          text: `OFN`,
          score: 1,
          checked: false
      }, {
          text: `MEN`,
          score: 0,
          checked: false
      }, {
          text: `PFQ`,
          score: 0,
          checked: false
      }
  ],
    type: 'radio',
  },
  q13: {
    text: `Dr. Miller has a busy pediatric dentistry practice and she needs a
    skilled, reliable hygienist to keep things running smoothly. The last two
    people she hired were recommended by top dentists in the area, but they
    each lasted less than one month. She is now in desperate need of a hygienist
    who can competently handle the specific challenges of her practice.
    Which one of the following candidates should Dr. Miller consider most
    seriously?`,
    jumpTo: 'q14',
    progress: 50,
    name: 'Q13',
    weight: 14,
    jumpBack: '',
    edss: 'Yes',
    options: [
      {
          text: `Marilyn has been a hygienist for fifteen years, and her
          current employer, who is about to retire, says she is the best
          in the business. The clientele she has worked with consists of
          some of the wealthiest and most powerful citizens in the county.`,
          score: 0,
          checked: false
      }, {
          text: `James has worked as a dental hygienist for three years
          in a public health clinic. He is very interested in securing a
          position in a private dental office.`,
          score: 0,
          checked: false
      }, {
          text: `Lindy recently graduated at the top of her class from
          one of the best dental hygiene programs in the state. Prior to
          becoming a dental hygienist, Lindy spent two years working in a
          day care center.`,
          score: 1,
          checked: false
      }, {
          text: `Kathy is an experienced and highly recommended dental
          hygienist who is also finishing up a degree in early childhood
          education, which she hopes will get her a job as a preschool
          teacher. She is eager to find a job in a pediatric practice,
          since she has always wanted to work with children.`,
          score: 0,
          checked: false
      }
  ],
    type: 'radio',
    answer: '',
  },
  q14: {
    text: `Mrs. Jansen recently moved to Arizona. She wants to fill her new
    backyard with flowering plants. Although she is an experienced gardener,
    she isn't very well-versed in what plants will do well in the Arizona
    climate. Also, there is a big tree in her backyard making for shady
    conditions and she isn't sure what plants will thrive without much
    direct sunlight. Her favorite gardening catalog offers several backyard
    seed packages. Which one should Mrs. Jansen choose?`,
    jumpTo: 'q15',
    progress: 54,
    name: 'Q14',
    weight: 15,
    jumpBack: '',
    edss: 'Yes',
    options: [
      {
          text: `The Rainbow Collection is ideal for North-east gardens.
          It includes a variety of colorful perennials that thrive in cool,
          moist conditions.`,
          score: 0,
          checked: false
      }, {
          text: `The Greenhouse Collection will blossom year after year
          if planted in brightly lit locations and watered regularly.`,
          score: 0,
          checked: false
      }, {
          text: `The Treehouse Collection will provide lush green plants
          with delicate colorful flowers that thrive in shady and partially
          shady locations.`,
          score: 1,
          checked: false
      }, {
          text: `The Oasis Collection includes a variety of perennials that thrive in dry climates and bright
          sunlight.`,
          score: 0,
          checked: false
      }
  ],
    type: 'radio',
    answer: '',
  },
  q15: {
    text: `If + means ÷ , × means – , – means × & ÷ means + , then 38+19 – 16 x 17 ÷ 3 = ?`,
    jumpTo: 'q16',
    progress: 58,
    name: 'Q15',
    weight: 16,
    jumpBack: '',
    edss: 'Yes',
    options: [
      {
          text: `16`,
          score: 0,
          checked: false
      }, {
          text: `19`,
          score: 0,
          checked: false
      }, {
          text: `18`,
          score: 1,
          checked: false
      }, {
          text: `12`,
          score: 0,
          checked: false
      }
  ],
    type: 'radio',
    answer: '',
  },
  q16: {
    text: `How good is your English?`,
    jumpTo: 'q17',
    name: 'Q16',
    progress: 62,
    division: true,
    weight: 17,
    jumpBack: '',
    edss: 'Yes',
    type: 'division',
    section: 'English Grammar',
    answer: '',
    sub: [
      {
          text: `Which suffix means "the quality or state of"?`,
          name: 'Q16.1',
          options: [
              {
                  text: `-ist`,
                  score: 0,
              }, {
                  text: `-ence`,
                  score: 1,
              }, {
                  text: `-ator`,
                  score: 0,
              }
          ],
          answer: '',
      }, {
          text: `What is the term for words that sound like
          themselves, such as "ding dong" and "purr"?`,
          name: 'Q16.2',
          options: [
              {
                  text: `Onomastics`,
                  score: 0,
              }, {
                  text: `Ontogeny`,
                  score: 0,
              }, {
                  text: `Ontology`,
                  score: 0,
              }, {
                  text: `Onomatopoeia`,
                  score: 1,
              }
          ],
          answer: '',
      }
  ]
  },
  q17: {
    text: `In the last 4 weeks...`,
    jumpTo: 'q20',
    progress: 66,
    division: true,
    name: 'Q17',
    weight: 18,
    jumpBack: '',
    edss: 'Yes',
    type: 'division',
    answer: '',
    sub: [
      {
          name: 'Q17.1',
          text: `How often did you exercised?`,
          options: [
              {
                  text: `Never or rarely`,
                  score: 0,
              }, {
                  text: `About once a week`,
                  score: 1,
              }, {
                  text: `A few times a week`,
                  score: 2,
              }, {
                  text: `Every day`,
                  score: 3,
              }
          ],
          answer: '',
      }, {
          text: `How often did you get involved in outdoor activities?`,
          name: 'Q17.2',
          options: [
              {
                  text: `Never or rarely`,
                  score: 0,
              }, {
                  text: `A few times`,
                  score: 1,
              }, {
                  text: `About once a week`,
                  score: 2,
              }, {
                  text: `Every day`,
                  score: 3,
              }
          ],
          answer: '',
      }, {
          text: `Do you love animals?`,
          name: 'Q17.3',
          options: [
              {
                  text: `No`,
                  score: 0,
              }, {
                  text: `Yes`,
                  score: 1,
              }
          ],
          answer: '',
      }, {
          text: `How do you like to spend your leisure time`,
          name: 'Q17.4',
          options: [
              {
                  text: `Sleeping`,
                  score: 0,
              }, {
                  text: `Playing indoor games`,
                  score: 1,
              }, {
                  text: `Playing outdoor games`,
                  score: 2,
              }, {
                  text: `Computer surfing`,
                  score: 4,
              }, {
                  text: `Reading a book`,
                  score: 5,
              }
          ],
          answer: '',
      }
    ]
  },
  q20: {
    text: `On an average day, which of the following best describes your routine?`,
    jumpTo: 'q21',
    name: 'Q20',
    progress: 72,
    weight: 20,
    jumpBack: '',
    edss: 'Yes',
    type: 'radio',
    answer: '',
    options: [
      {
          text: `I spend most of my time with my smartphone`,
          score: 0,
      }, {
          text: `I spent most of my time partying`,
          score: 1,
      }, {
          text: `I spent most of my time with friends`,
          score: 2,
      }, {
          text: `I spent most of my time reading books`,
          score: 3,
      }, {
          text: `I spent my time balancing between study and outdoor activities`,
          score: 4,
      }
  ]
  },
  q21: {
    jumpTo: 'q23',
    progress: 76,
    name: 'Q21',
    weight: 21,
    jumpBack: '',
    division: true,
    type: 'division',
    answer: '',
    sub: [
      {
        text: `Which of the following describes your book collection?`,
        name: 'Q21',
        edss: 'Yes',
        options: [
          {
              text: `I don't have any book collection`,
              score: 0,
          }, {
              text: `I only have books that are in my course module`,
              score: 1,
          }, {
              text: `I have a huge collection of novels`,
              score: 2,
          }, {
              text: `My book collection includes all types of books`,
              score: 3,
          }
      ],
        answer: '',
      },
      {
        text: `In general, when do you wake up in the morning?`,
        edss: 'no',
        name: 'Q22',
        options: [
          {
              text: `Usually on or after 10 A.M`,
              score: 0,
              checked: false
          }, {
              text: `Usually before 9 A.M`,
              score: 1,
              checked: false
          }, {
              text: `Usually before 8 A.M`,
              score: 2,
              checked: false
          }, {
              text: `Usually before 7 A.M`,
              score: 3,
              checked: false
          }, {
              text: `Usually before 6 A.M`,
              score: 3,
              checked: false
          }, {
              text: `None of the time`,
              score: 3,
              checked: false
          }
      ],
        answer: '',
      }
    ]
  },
  q23: {
    text: `Please specify if you have certain levels of phobia in any of the following?`,
    jumpTo: 'q25',
    name: 'Q23',
    progress: 80,
    weight: 23,
    jumpBack: '',
    type: 'table',
    answer: '',
    commonOptions: [
      {
          text: `No`,
          score: 3,
          checked: false
      }, {
          text: `A bit`,
          score: 2,
          checked: false
      }, {
          text: `Moderate`,
          score: 1,
          checked: false
      }, {
          text: `Yes`,
          score: 0,
          checked: false
      }
  ],
  sub: [
      {
          text: `Claustrophobia`,
          name: 'Q23.1',
          edss: 'no',
      }, {
          text: `Arachnophobia`,
          name: 'Q23.2',
          edss: 'no',
      }, {
          text: `Escalaphobia`,
          name: 'Q23.3',
          edss: 'no',
      }, {
          text: `Acrophobia`,
          name: 'Q23.4',
          edss: 'no',
      }
    ]
  },
  q25: {
    text: `Rate youself as a student: `,
    name: 'Q25',
    jumpTo: `q26`,
    progress: 89,
    weight: 25,
    jumpBack: '',
    type: 'scale',
    scale: true,
    max: 10,
    min: 0,
    showTicks: true,
    step: 1,
    thumbLabel: true,
    answer: '',
    section: 'Student',
    edss: 'No',
    leftRangeLabel: 'Best Student',
    rightRangeLabel: 'Average Student',
    options: [
      {
        text: `0`,
        score: 0,
      }, {
        text: `1`,
        score: 1,
      }, {
        text: `2`,
        score: 2,
      }, {
        text: `3`,
        score: 3,
      }, {
        text: `4`,
        score: 4,
      }, {
        text: `5`,
        score: 5,
      }, {
        text: `6`,
        score: 6,
      }, {
        text: `7`,
        score: 7,
      }, {
        text: `8`,
        score: 8,
      }, {
        text: `9`,
        score: 9,
      }, {
        text: `10`,
        score: 10,
      }
    ],
  },
  q26: {
    text: `Overall, how would you rate your happiness in life: `,
    name: 'Q26',
    progress: 90,
    type: 'scale',
    scale: true,
    max: 10,
    weight: 26,
    jumpBack: '',
    min: 0,
    showTicks: true,
    step: 1,
    thumbLabel: true,
    answer: '',
    jumpTo: `q27`,
    section: 'Quality of Life',
    edss: 'No',
    leftRangeLabel: 'Best',
    rightRangeLabel: 'Worst',
    options: [
      {
        text: `0`,
        score: 0,
      }, {
        text: `1`,
        score: 1,
      }, {
        text: `2`,
        score: 2,
      }, {
        text: `3`,
        score: 3,
      }, {
        text: `4`,
        score: 4,
      }, {
        text: `5`,
        score: 5,
      }, {
        text: `6`,
        score: 6,
      }, {
        text: `7`,
        score: 7,
      }, {
        text: `8`,
        score: 8,
      }, {
        text: `9`,
        score: 9,
      }, {
        text: `10`,
        score: 10,
      }
    ],
  },
  q27: {
    descr1: `Thank you for answering the questions. We would like you
    to know that: `,
    intro: [`There will be a telephonic interview within 48hrs of submission of this form`,
    `If we found out that any of the answers were answered dishonestly we will
    be cancelling your form immediately`,
    `If you are selected in the telephonic round you will need to visit our institute for face to face interview`],
    name: 'Q27.2',
    progress: 92,
    abbProgress: 1,
    weight: 27,
    jumpBack: '',
    edss: 'no',
    sub3: [
      {
          name: 'Q27.1',
          edss: 'no',
          text: `Select upto 6 tentative date for face to face interview? `,
          options: [
              {
                  text: `I dont want to`,
                  score: 0
              }, {
                  // text: `I've had relapses on these dates (enter up to 6 relapses):`,
                  text: `I want to (Select upto 6 dates)`,
                  score: 1
              }
          ],
          answer: '',
      }
  ],
  sub2: {
      name: 'Q27.2',
      edss: 'no',
      text: `Have you had any relapses since your last visit? `,
      selectOption: [ 0, 1, 2, 3, 4, 5, 6],
      answer: '',
  },
  sub1: {
      name: 'Q27.3',
      relapsesYear: {
          0: '',
          1: '',
          2: '',
          3: '',
          4: '',
          5: ''
      },
      relapsesMonth: {
          0: '',
          1: '',
          2: '',
          3: '',
          4: '',
          5: ''
      },
      monthOptions: [
          { text: 'January', value: 1 },
          { text: 'February', value: 2 },
          { text: 'March', value: 3 },
          { text: 'April', value: 4 },
          { text: 'May', value: 5 },
          { text: 'June', value: 6 },
          { text: 'July', value: 7 },
          { text: 'August', value: 8 },
          { text: 'September', value: 9 },
          { text: 'October', value: 10 },
          { text: 'November', value: 11 },
          { text: 'December', value: 12 }
      ],
      answer_options: [],
      answer_options_score: [],
  },
    score: 0,
    jumpTo: `q28`,
    relapses: true,
    section: 'Relapse',
    type: 'relapses'
  },
  q28: {
    text: `Would you like to recommend our institute to anyone?`,
    jumpTo: `q29`,
    progress: 95,
    abbProgress: 33.3,
    name: 'Q28',
    weight: 28,
    jumpBack: '',
    edss: 'no',
    options: [
      {
          text: `Yes`,
          score: 1,
          checked: false
      }, {
          text: `No`,
          score: 0,
          checked: false
      }
    ],
    type: 'radio',
    answer: '',
  },
  q29: {
    text: `Select all that apply`,
    progress: 98,
    abbProgress: 66.6,
    name: 'Q29',
    weight: 29,
    jumpBack: '',
    descr1: `Please select any topics you'd like to discuss at your next appointment.`,
    type: 'patientConcerns',
    jumpTo: 'review',
    section: 'Student Concerns',
    outro: 'Click next to review the information before it’s sent to your doctor. ',
    edss: 'No',
    answer: '',
    options: [
      {
        text: `Medication concerns`,
        score: 1,
        checked: false,
      }, {
        text: `Medication refills`,
        score: 1,
        checked: false,
      }, {
        text: `Work-related needs`,
        score: 1,
        checked: false,
      }, {
        text: `Family planning`,
        score: 1,
        checked: false,
      }, {
        text: `Other topic`,
        score: 1,
        checked: false,
        textBox: true,
        othertext: ''
      },
      {
        text: `Other topic`,
        score: 1,
        checked: false,
        textBox: true,
        othertext: ''
      }, {
        text: `Other topic`,
        score: 1,
        checked: false,
        textBox: true,
        othertext: ''
      }
    ]
  }
};
