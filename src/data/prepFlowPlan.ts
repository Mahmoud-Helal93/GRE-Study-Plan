// PrepFlow full 8-week GRE study plan
// Generated from the Week 1–Week 8 uploaded DOCX files.
// Each task can include zero or more hyperlinks in the links array.

export type PrepFlowTask = {
  id: string;
  title: string;
  optional: boolean;
  type: "video" | "practice" | "review" | "quiz" | "reading" | "writing" | "test" | "setup" | "other";
  links: { text: string; url: string }[];
};

export type PrepFlowSection = {
  category: string;
  icon: string;
  tasks: PrepFlowTask[];
};

export type PrepFlowBlock = {
  id: string;
  type: "setup" | "day" | "practice-test";
  week: number;
  day: number;
  label: string;
  title: string;
  sections: PrepFlowSection[];
};

export const prepFlowPlan: PrepFlowBlock[] = [
  {
    "id": "setup-gre-intro",
    "type": "setup",
    "week": 0,
    "day": 0,
    "label": "Setup 1",
    "title": "Introduction to the GRE",
    "sections": [
      {
        "category": "Getting Started",
        "icon": "📘",
        "tasks": [
          {
            "id": "setup-gre-intro-getting-started-1",
            "title": "If you're new to the GRE, please watch the following video which explains what the exam tests, how to study for it, the question types and tips and tricks!Introduction to the GRE - Exam Walkthrough + Tips and Tricks",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "Introduction to the GRE - Exam Walkthrough + Tips and Tricks",
                "url": "https://www.gregmat.com/class/introduction-to-the-gre-exam-walkthrough-tips-and-tricks"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "setup-materials",
    "type": "setup",
    "week": 0,
    "day": 0,
    "label": "Setup 2",
    "title": "Before You Begin: Materials and Other Things",
    "sections": [
      {
        "category": "Materials",
        "icon": "🧰",
        "tasks": [
          {
            "id": "setup-materials-materials-1",
            "title": "Before You Get Started...",
            "optional": false,
            "type": "setup",
            "links": []
          },
          {
            "id": "setup-materials-materials-2",
            "title": "GRE SuperPower Pack",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "GRE SuperPower Pack",
                "url": "https://www.amazon.com/Official-Super-Power-Pack-Second/dp/1260026396/ref=sr_1_1_sspa?dchild=1&keywords=super%20power%20pack%20gre&psc=1&qid=1595108403&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQ0VRSFJLS0hGQVdOJmVuY3J5cHRlZElkPUEwMzA3MTEwMzNWVk1TTllSN05BVyZlbmNyeXB0ZWRBZElkPUEwNjM0MzYzM0UySTdHMzlON0MyWCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&sr=8-1-spons"
              }
            ]
          },
          {
            "id": "setup-materials-materials-3",
            "title": "ETS Math Review Guide -- If one of the links is not working, try the other link (Link 1, Link 2)",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "Link 1",
                "url": "https://www.ets.org/s/gre/pdf/gre_math_review.pdf"
              },
              {
                "text": "Link 2",
                "url": "https://www.ets.org/content/dam/ets-org/pdfs/gre/gre-math-review.pdf"
              }
            ]
          },
          {
            "id": "setup-materials-materials-4",
            "title": "GRE Big Book (can be found online)",
            "optional": false,
            "type": "setup",
            "links": []
          },
          {
            "id": "setup-materials-materials-5",
            "title": "The GregMat Flashcards App",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "GregMat Flashcards App",
                "url": "https://www.gregmat.com/app"
              }
            ]
          },
          {
            "id": "setup-materials-materials-6",
            "title": "Manhattan 5-lb Book",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "Manhattan 5-lb Book",
                "url": "https://amzn.to/3vvCezQ"
              }
            ]
          },
          {
            "id": "setup-materials-materials-7",
            "title": "Just do the quant in this book",
            "optional": false,
            "type": "setup",
            "links": []
          },
          {
            "id": "setup-materials-materials-8",
            "title": "Any supplemental materials you want",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "Any supplemental materials you want",
                "url": "https://www.gregmat.com/recommended-resources"
              }
            ]
          },
          {
            "id": "setup-materials-materials-9",
            "title": "Greg Mat’s Vocabulary List",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "Vocabulary List",
                "url": "https://docs.google.com/spreadsheets/d/1jRATLVV34vATsL4Y67fZZXQc7qZPYc0c0Yk7Bykh4fw/edit"
              }
            ]
          },
          {
            "id": "setup-materials-materials-10",
            "title": "Check out the GRE calculator",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "GRE calculator",
                "url": "https://www.gregmat.com/tools/calculator"
              }
            ]
          },
          {
            "id": "setup-materials-materials-11",
            "title": "Create an ETS GRE account",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "ETS GRE account",
                "url": "https://www.ets.org/gre"
              }
            ]
          },
          {
            "id": "setup-materials-materials-12",
            "title": "Read the Study Plans FAQ for common questions - this is important",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "Study Plans FAQ",
                "url": "https://gregmat.crisp.help/en/article/study-plans-faq-17sqxk2/"
              }
            ]
          },
          {
            "id": "setup-materials-materials-13",
            "title": "Familiarize yourself with Quant question types",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "Quant question types",
                "url": "https://www.ets.org/gre/revised_general/about/content/quantitative_reasoning"
              }
            ]
          },
          {
            "id": "setup-materials-materials-14",
            "title": "Familiarize yourself with Verbal question types",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "Verbal question types",
                "url": "https://www.ets.org/gre/revised_general/about/content/verbal_reasoning"
              }
            ]
          },
          {
            "id": "setup-materials-materials-15",
            "title": "The Vocab Mountain",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "The Vocab Mountain",
                "url": "https://docs.google.com/spreadsheets/d/1ouJlyvRxSPsEbKjlRk_jzPzHG6q71SAKkpHDrVoBH9Y/edit"
              }
            ]
          },
          {
            "id": "setup-materials-materials-16",
            "title": "www.prepswift.com (learn the quant foundation faster)",
            "optional": false,
            "type": "setup",
            "links": [
              {
                "text": "www.prepswift.com",
                "url": "https://www.prepswift.com/"
              }
            ]
          },
          {
            "id": "setup-materials-materials-17",
            "title": "Problems on the Greg Mat website:",
            "optional": false,
            "type": "setup",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "setup-materials-verbal-1",
            "title": "Mini Exams",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Mini Exams",
                "url": "https://www.gregmat.com/course/gre-mini-exams"
              }
            ]
          },
          {
            "id": "setup-materials-verbal-2",
            "title": "A variety of different Quizzes",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "A variety of different Quizzes",
                "url": "https://www.gregmat.com/course-group/various-quizzes"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "setup-important-videos",
    "type": "setup",
    "week": 0,
    "day": 0,
    "label": "Setup 3",
    "title": "Before You Begin: Important Videos and Notes",
    "sections": [
      {
        "category": "Important Videos",
        "icon": "🎥",
        "tasks": [
          {
            "id": "setup-important-videos-important-videos-1",
            "title": "The videos below will introduce you to our philosophy for GRE success. If you watch these five videos, pay attention to them, and heed the advice within, your GRE prep, in our opinion, will progress much more smoothly. You'll also likely see much higher score gains.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "setup-important-videos-important-videos-2",
            "title": "Video 1: You're Probably Still in the Memorization Stage",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "You're Probably Still in the Memorization Stage",
                "url": "https://www.gregmat.com/class/low-scores-youre-probably-in-the-memorization-stage"
              }
            ]
          },
          {
            "id": "setup-important-videos-important-videos-3",
            "title": "Video 2: Being Busy Does Not Equal Being Productive",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Being Busy Does Not Equal Being Productive",
                "url": "https://www.gregmat.com/class/being-busy-does-not-equal-being-productive"
              }
            ]
          },
          {
            "id": "setup-important-videos-important-videos-4",
            "title": "Video 3: Retaining What We Learn",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Retaining What We Learn",
                "url": "https://www.gregmat.com/class/important-retaining-what-we-learn"
              }
            ]
          },
          {
            "id": "setup-important-videos-important-videos-5",
            "title": "Video 4: How to Properly Do the Vocab Mountain",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "How to Properly Do the Vocab Mountain",
                "url": "https://www.gregmat.com/class/how-to-properly-do-the-vocab-mountain"
              }
            ]
          },
          {
            "id": "setup-important-videos-important-videos-6",
            "title": "Video 5: The Tick Box Method",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "The Tick Box Method",
                "url": "https://www.gregmat.com/class/the-tick-box-method-check-your-progress"
              }
            ]
          },
          {
            "id": "setup-important-videos-important-videos-7",
            "title": "If you find that the quant concept series videos in the two-month plan are lengthy and too time-consuming, you can check out the quant concept videos at my other site www.prepswift.com. Keep in mind that the material on that site is an extra $2 a month. There are some free videos on there that will give you an idea of how it works.",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "www.prepswift.com",
                "url": "https://www.prepswift.com/"
              }
            ]
          },
          {
            "id": "setup-important-videos-important-videos-8",
            "title": "If you need accomodations (such as extra time) and don't already have it, you need to start the process now, as it can take time to gather the documentation and for ETS to review it. This is all the more important if you don't already have a relevant diagnosis but suspect you have one (or if the documentation you have isn't in the right format), as you will in many cases need to be tested first. Please read this blog post to learn more about the process. You may wish to seek advice on forums.gregmat.com or on Reddit first (if it's highly confidental, you can email support@gregmat.com). Seriously: do it before you start the study plan.",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "this blog post",
                "url": "https://www.gregmat.com/blog/a-guide-to-accommodations-for-the-gre"
              }
            ]
          },
          {
            "id": "setup-important-videos-important-videos-9",
            "title": "Also note that you can only take five GRE tests in a rolling calendar year. While retaking once or twice is not a bad idea, we strongly recommend not to just continuously take tests and exhaust your attempts - we've seen people take four tests in four months and seek help only then which becomes a problem as they have only one shot left.",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w1d1",
    "type": "day",
    "week": 1,
    "day": 1,
    "label": "Day 1",
    "title": "Week 1 - Day 1",
    "sections": [
      {
        "category": "Other",
        "icon": "📌",
        "tasks": [
          {
            "id": "w1d1-other-1",
            "title": "Thoughts and Discussion on the Structure of the NEW GRE Exam",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Thoughts and Discussion on the Structure of the NEW GRE Exam",
                "url": "https://www.gregmat.com/class/thoughts-and-discussion-on-the-structure-of-the-new-gre"
              }
            ]
          },
          {
            "id": "w1d1-other-2",
            "title": "Scoring System of the New GRE",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Scoring System of the New GRE",
                "url": "https://www.gregmat.com/class/scoring-system-of-the-new-gre"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d1-quant-1",
            "title": "Integers and Primes",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Integers and Primes",
                "url": "https://www.gregmat.com/class/integers-and-primes"
              }
            ]
          },
          {
            "id": "w1d1-quant-2",
            "title": "Factors and Multiples",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Factors and Multiples",
                "url": "https://www.gregmat.com/class/factors-and-multiples"
              }
            ]
          },
          {
            "id": "w1d1-quant-3",
            "title": "(For PrepSwift users) www.prepswift.com",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "www.prepswift.com",
                "url": "https://www.prepswift.com/gre-quant"
              }
            ]
          },
          {
            "id": "w1d1-quant-4",
            "title": "Starting video: Integers",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d1-quant-5",
            "title": "Ending video: Even Versus Odd",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d1-verbal-1",
            "title": "Choose ONLY ONE series to follow. None of them are bad and they all have their pros and cons. However, I would suggest either the first series or the third one.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d1-verbal-2",
            "title": "If you're coming back to the two-month plan AGAIN, choose a series that is different from the one you followed last time. That'll keep things spicy.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d1-verbal-3",
            "title": "You can watch the first video of each series to see which one \"vibes\" with you the most.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d1-verbal-4",
            "title": "TC and SE Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 1",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-1"
              }
            ]
          },
          {
            "id": "w1d1-verbal-5",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 1",
                "url": "https://www.gregmat.com/class/2024-edition-gre-tc-and-se-strategy-series-session-1"
              }
            ]
          },
          {
            "id": "w1d1-verbal-6",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 1",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-1"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d1-quant-6",
            "title": "(optional for PrepSwift users) Complete Integers/Primes/Factors/Multiples Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Integers/Primes/Factors/Multiples Practice",
                "url": "https://www.gregmat.com/class/practice-for-integers-primes-factors-and-multiples"
              }
            ]
          },
          {
            "id": "w1d1-quant-7",
            "title": "(optional for PrepSwift users) Complete Manhattan 5-lb chapter Divisibility and Primes",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": " ",
                "url": "https://gregmat.memberspace.com/content/vcc0d3b3e02?cmsbe=false&display=popup&format=popup"
              }
            ]
          },
          {
            "id": "w1d1-quant-8",
            "title": "3rd Edition: Chapter 13, p. 443",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w1d1-quant-9",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d1-quant-10",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w1d1-quant-11",
            "title": "Under TAGS, filter by Numbers, Number Properties, and Factors/Multiples",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w1d1-quant-12",
            "title": "Study Group 1 Quant Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 1 Quant Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-1"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d1-verbal-7",
            "title": "Complete TC and SE Homework (depending on the series you're following)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d1-verbal-8",
            "title": "Homework is below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d1-verbal-9",
            "title": "Study Group 1 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 1 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501823268/set-1-flash-cards/"
              }
            ]
          },
          {
            "id": "w1d1-verbal-10",
            "title": "Familiarize yourself with the Vocab Mountain Technique (if you haven't already seen)",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain Technique",
                "url": "https://www.gregmat.com/class/how-to-properly-do-the-vocab-mountain"
              }
            ]
          },
          {
            "id": "w1d1-verbal-11",
            "title": "Vocab Mountain List",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain List",
                "url": "https://docs.google.com/spreadsheets/u/1/d/1ouJlyvRxSPsEbKjlRk_jzPzHG6q71SAKkpHDrVoBH9Y/edit"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w1d2",
    "type": "day",
    "week": 1,
    "day": 2,
    "label": "Day 2",
    "title": "Week 1 - Day 2",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d2-quant-1",
            "title": "Fractions, Decimals, Percents, Ratios Part 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Fractions, Decimals, Percents, Ratios Part 1",
                "url": "https://www.gregmat.com/class/fractions-decimals-percents-ratios-part-1"
              }
            ]
          },
          {
            "id": "w1d2-quant-2",
            "title": "Fractions, Decimals, Percents, Ratios Part 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Fractions, Decimals, Percents, Ratios Part 2",
                "url": "https://www.gregmat.com/class/fractions-decimals-percents-ratios-part-2"
              }
            ]
          },
          {
            "id": "w1d2-quant-3",
            "title": "Starting video: Divisibility Rules (5, 6, 8, 9, 10)",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d2-quant-4",
            "title": "Ending video: Prime Factorization",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d2-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w1d2-verbal-2",
            "title": "TC and SE Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 2",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-2"
              }
            ]
          },
          {
            "id": "w1d2-verbal-3",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 2",
                "url": "https://www.gregmat.com/class/2024-edition-gre-tc-and-se-strategy-series-session-2"
              }
            ]
          },
          {
            "id": "w1d2-verbal-4",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 2",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-2"
              }
            ]
          },
          {
            "id": "w1d2-verbal-5",
            "title": "Carefully study the Support/Contrast Logic List",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Support/Contrast Logic List",
                "url": "https://docs.google.com/spreadsheets/d/1yJan-Lri2-44SZLdO-RXXFMDARFjJiH-upEj8yOG-J8/edit"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d2-quant-5",
            "title": "(optional for PrepSwift users) Complete Fractions, Decimals, Percents, Ratios Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Fractions, Decimals, Percents, Ratios Practice",
                "url": "https://www.gregmat.com/class/practice-for-fractions-decimals-percents-and-ratios"
              }
            ]
          },
          {
            "id": "w1d2-quant-6",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d2-quant-7",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w1d2-quant-8",
            "title": "Under TAGS, filter by Fractions, Decimals, Percents, and Ratios",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d2-verbal-6",
            "title": "Complete TC and SE Homework (depending on the series you're following)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d2-verbal-7",
            "title": "Homework is under the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d2-verbal-8",
            "title": "Study Group 1 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 1 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501823268/set-1-flash-cards/"
              }
            ]
          },
          {
            "id": "w1d2-verbal-9",
            "title": "(Optional) Start working though Pairing (Skill Building). We do not envision you to complete this in one day - do it when you can.",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Pairing (Skill Building)",
                "url": "https://www.gregmat.com/skill-building/type/pairing"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w1d3",
    "type": "day",
    "week": 1,
    "day": 3,
    "label": "Day 3",
    "title": "Week 1 - Day 3",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d3-quant-1",
            "title": "Exponents and Roots I",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Exponents and Roots I",
                "url": "https://www.gregmat.com/class/exponents-and-roots"
              }
            ]
          },
          {
            "id": "w1d3-quant-2",
            "title": "Exponents and Roots II",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Exponents and Roots II",
                "url": "https://www.gregmat.com/class/exponents-and-roots-ii"
              }
            ]
          },
          {
            "id": "w1d3-quant-3",
            "title": "Starting video: Infinitude of Primes",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d3-quant-4",
            "title": "Ending video: Remainders and Addition",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d3-verbal-1",
            "title": "Determining Support/Contrast in TC Questions",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Determining Support/Contrast in TC Questions",
                "url": "https://www.gregmat.com/class/improve-your-skills-verbal-determining-supportcontrast-text-completion-questions-1"
              }
            ]
          },
          {
            "id": "w1d3-verbal-2",
            "title": "Carefully study the Support/Contrast Logic List",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Support/Contrast Logic List",
                "url": "https://docs.google.com/spreadsheets/d/1yJan-Lri2-44SZLdO-RXXFMDARFjJiH-upEj8yOG-J8/edit"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d3-quant-5",
            "title": "(optional for PrepSwift users) Complete Quant Practice: All Previous Concepts",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Quant Practice: All Previous Concepts",
                "url": "https://www.gregmat.com/class/practice-incorporating-all-previous-lessons"
              }
            ]
          },
          {
            "id": "w1d3-quant-6",
            "title": "(optional for PrepSwift users) Complete Manhattan 5-lb chapters on Fractions/Decimals and Percents",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d3-quant-7",
            "title": "3rd Edition: Chapter 11, p. 393",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w1d3-quant-8",
            "title": "3rd Edition: Chapter 12, p. 415",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w1d3-quant-9",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d3-quant-10",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w1d3-quant-11",
            "title": "Under TAGS, filter by Fractions, Decimals, Percents, and Ratios",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w1d3-review-1",
            "title": "Day 1 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=1"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d3-verbal-3",
            "title": "Revise Group 1 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 1 Vocabulary",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1.PNG"
              }
            ]
          },
          {
            "id": "w1d3-verbal-4",
            "title": "Day 1 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=1"
              }
            ]
          },
          {
            "id": "w1d3-verbal-5",
            "title": "Study Group 2 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 2 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501824811/set-2-flash-cards/"
              }
            ]
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w1d3-review-2",
            "title": "Watch from 01:10 - 29:00",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d3-review-3",
            "title": "(Optional) Start working though Support/Contrast (Skill Building). We do not envision you to complete this in one day - do it when you can.",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Support/Contrast (Skill Building)",
                "url": "https://www.gregmat.com/skill-building/type/support-contrast"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w1d4",
    "type": "day",
    "week": 1,
    "day": 4,
    "label": "Day 4",
    "title": "Week 1 - Day 4",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d4-quant-1",
            "title": "Exponents and Roots III",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Exponents and Roots III",
                "url": "https://www.gregmat.com/class/exponents-and-roots-iii"
              }
            ]
          },
          {
            "id": "w1d4-quant-2",
            "title": "Starting video: Fractions",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d4-quant-3",
            "title": "Ending video: Rational versus Irrational II",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d4-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w1d4-verbal-2",
            "title": "TC and SE Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 3",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-3"
              }
            ]
          },
          {
            "id": "w1d4-verbal-3",
            "title": "Watch from 29:00 - end",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d4-verbal-4",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 3",
                "url": "https://www.gregmat.com/class/2024-edition-gre-tc-and-se-strategy-series-session-3"
              }
            ]
          },
          {
            "id": "w1d4-verbal-5",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 3",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-3"
              }
            ]
          },
          {
            "id": "w1d4-verbal-6",
            "title": "(Optional) Determining Support/Contrast in TC Part 2",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Determining Support/Contrast in TC Part 2",
                "url": "https://www.gregmat.com/class/improve-your-skills-verbal-determining-supportcontrast-text-completion-questions-2"
              }
            ]
          },
          {
            "id": "w1d4-verbal-7",
            "title": "Carefully study the Support/Contrast Logic List",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Support/Contrast Logic List",
                "url": "https://docs.google.com/spreadsheets/d/1yJan-Lri2-44SZLdO-RXXFMDARFjJiH-upEj8yOG-J8/edit"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d4-quant-4",
            "title": "(optional for PrepSwift users) Complete Exponents Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Exponents Practice",
                "url": "https://www.gregmat.com/class/exponents-and-roots-practice"
              }
            ]
          },
          {
            "id": "w1d4-quant-5",
            "title": "(optional for PrepSwift users) Complete Quant Practice: All Previous Concepts",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Quant Practice: All Previous Concepts",
                "url": "https://www.gregmat.com/class/practice-incorporating-all-previous-lessons-3u10"
              }
            ]
          },
          {
            "id": "w1d4-quant-6",
            "title": "(optional for PrepSwift users) Complete Manhattan 5-lb chapter on Ratios",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d4-quant-7",
            "title": "3rd Edition: Chapter 20, p. 569",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w1d4-quant-8",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d4-quant-9",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w1d4-quant-10",
            "title": "Under TAGS, filter by Exponents",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w1d4-quant-11",
            "title": "Study Group 2 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 2 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-2"
              }
            ]
          },
          {
            "id": "w1d4-quant-12",
            "title": "Day 2 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=2"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d4-verbal-8",
            "title": "Complete TC and SE Homework (depending on the series you're following)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d4-verbal-9",
            "title": "Homework is below the video",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d4-verbal-10",
            "title": "Revise Group 1 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 1 Vocabulary",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1.PNG"
              }
            ]
          },
          {
            "id": "w1d4-verbal-11",
            "title": "Day 1 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=1"
              }
            ]
          },
          {
            "id": "w1d4-verbal-12",
            "title": "Study Group 2 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 2 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501824811/set-2-flash-cards/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w1d5",
    "type": "day",
    "week": 1,
    "day": 5,
    "label": "Day 5",
    "title": "Week 1 - Day 5",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d5-quant-1",
            "title": "Real Numbers and Absolute Value",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Real Numbers and Absolute Value",
                "url": "https://www.gregmat.com/class/real-numbers-and-absolute-value-i"
              }
            ]
          },
          {
            "id": "w1d5-quant-2",
            "title": "Starting video: Rounding Decimals",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d5-quant-3",
            "title": "Ending video: Real Number Properties",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d5-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w1d5-verbal-2",
            "title": "TC and SE Session 4",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 4",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-4"
              }
            ]
          },
          {
            "id": "w1d5-verbal-3",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 4",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 4",
                "url": "https://www.gregmat.com/class/2024-edition-text-completion-and-sentence-equivalence-series-session-4"
              }
            ]
          },
          {
            "id": "w1d5-verbal-4",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 4",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 4",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-4"
              }
            ]
          },
          {
            "id": "w1d5-verbal-5",
            "title": "Watch from 35:10 - end",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d5-quant-4",
            "title": "(optional for PrepSwift users) Complete Real Numbers and Absolute Value Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Real Numbers and Absolute Value Practice",
                "url": "https://www.gregmat.com/class/real-numbers-and-absolute-value-practice"
              }
            ]
          },
          {
            "id": "w1d5-quant-5",
            "title": "(optional for PrepSwift users) Complete Manhattan 5-lb chapters on Number Properties",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d5-quant-6",
            "title": "3rd Edition: Chapter 15, p. 477",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w1d5-quant-7",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d5-quant-8",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w1d5-quant-9",
            "title": "Under TAGS, filter by Absolute Value",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w1d5-review-1",
            "title": "Day 2 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=2"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d5-verbal-6",
            "title": "Complete TC and SE Homework (depending on the series you're following)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d5-verbal-7",
            "title": "Homework is below the video",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d5-verbal-8",
            "title": "Revise Groups 1-2 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-2 Vocabulary",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-2.PNG"
              }
            ]
          },
          {
            "id": "w1d5-verbal-9",
            "title": "Day 2 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=2"
              }
            ]
          },
          {
            "id": "w1d5-verbal-10",
            "title": "Study Group 3 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 3 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501825718/set-3-flash-cards/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w1d6",
    "type": "day",
    "week": 1,
    "day": 6,
    "label": "Day 6",
    "title": "Week 1 - Day 6",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d6-quant-1",
            "title": "Starting video: Real Number Properties II",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d6-quant-2",
            "title": "Ending video: Fraction/Decimal/Ratio/Percent",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d6-quant-3",
            "title": "(Optional) Re-watch any videos on difficult topics",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "videos",
                "url": "https://www.gregmat.com/course/gre-quant-concept-series"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d6-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w1d6-verbal-2",
            "title": "TC and SE Session 5",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 5",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-5"
              }
            ]
          },
          {
            "id": "w1d6-verbal-3",
            "title": "TC and SE Session 6",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 6",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-6"
              }
            ]
          },
          {
            "id": "w1d6-verbal-4",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 5",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 5",
                "url": "https://www.gregmat.com/class/2024-edition-text-completion-and-sentence-equivalence-series-session-5"
              }
            ]
          },
          {
            "id": "w1d6-verbal-5",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 6",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 6",
                "url": "https://www.gregmat.com/class/2024-edition-text-completion-and-sentence-equivalence-series-session-6"
              }
            ]
          },
          {
            "id": "w1d6-verbal-6",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 5",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 5",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-5"
              }
            ]
          },
          {
            "id": "w1d6-verbal-7",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 6",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 6",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-6"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w1d6-quant-4",
            "title": "(optional for PrepSwift users) Complete Mega Practice: All Previous Concepts",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Mega Practice: All Previous Concepts",
                "url": "https://www.gregmat.com/class/all-arithmetic-mega-practice"
              }
            ]
          },
          {
            "id": "w1d6-quant-5",
            "title": "(optional for PrepSwift users) Complete Manhattan 5-lb chapter on Arithmetic",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d6-quant-6",
            "title": "3rd Edition: Chapter 7, p. 309",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w1d6-quant-7",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w1d6-quant-8",
            "title": "Study Group 3 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 3 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-3"
              }
            ]
          },
          {
            "id": "w1d6-quant-9",
            "title": "Day 3 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=3"
              }
            ]
          },
          {
            "id": "w1d6-quant-10",
            "title": "(Optional) Test Your Arithmetic Foundation:",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d6-quant-11",
            "title": "Quiz 1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quiz 1",
                "url": "https://www.gregmat.com/quizzes/quiz/arithmetic-foundation-quiz-1-yhnf"
              }
            ]
          },
          {
            "id": "w1d6-quant-12",
            "title": "Quiz 2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quiz 2",
                "url": "https://www.gregmat.com/quizzes/quiz/arithmetic-foundation-quiz-2-mfde"
              }
            ]
          },
          {
            "id": "w1d6-quant-13",
            "title": "Video solutions to both can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          },
          {
            "id": "w1d6-quant-14",
            "title": "(Optional) Flashcard Quizzes",
            "optional": true,
            "type": "quiz",
            "links": []
          },
          {
            "id": "w1d6-quant-15",
            "title": "Group 1 Group 2 Group 3 Group 4",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Group 1",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-1-quiz"
              },
              {
                "text": "Group 2",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-2-quiz"
              },
              {
                "text": "Group 3",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-3-quiz"
              },
              {
                "text": "Group 4",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-4-quiz"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w1d6-verbal-8",
            "title": "Revise Groups 1-2 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-2 Vocabulary",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-2.PNG"
              }
            ]
          },
          {
            "id": "w1d6-verbal-9",
            "title": "Day 2 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=2"
              }
            ]
          },
          {
            "id": "w1d6-verbal-10",
            "title": "Study Group 3 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 3 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501825718/set-3-flash-cards/"
              }
            ]
          },
          {
            "id": "w1d6-verbal-11",
            "title": "Complete Groups 1-3 Vocab Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 1-3 Vocab Quiz",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-1-3"
              }
            ]
          },
          {
            "id": "w1d6-verbal-12",
            "title": "(Optional) Complete Groups 1-3 Vocab Quiz Part 2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 1-3 Vocab Quiz Part 2",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-1-3-part-2"
              }
            ]
          },
          {
            "id": "w1d6-verbal-13",
            "title": "(Optional) Complete Groups 1-3 Vocab Quiz Part 3",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 1-3 Vocab Quiz Part 3",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-march-4-2021"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w1d7",
    "type": "day",
    "week": 1,
    "day": 7,
    "label": "Day 7",
    "title": "Week 1 - Day 7",
    "sections": [
      {
        "category": "Other",
        "icon": "📌",
        "tasks": [
          {
            "id": "w1d7-other-1",
            "title": "It's now time to take a practice test. For that, you have two options:",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w1d7-other-2",
            "title": "ETS PowerPrep 1",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w1d7-other-3",
            "title": "This is what we recommend most users to take, as it's an official ETS practice test. If you're stuck, try watching this video.",
            "optional": false,
            "type": "test",
            "links": [
              {
                "text": "this video",
                "url": "https://vimeo.com/1105337086"
              }
            ]
          },
          {
            "id": "w1d7-other-4",
            "title": "Go the ETS GRE website.",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w1d7-other-5",
            "title": "Create an account if you haven’t already done so.",
            "optional": false,
            "type": "reading",
            "links": []
          },
          {
            "id": "w1d7-other-6",
            "title": "Click on “Shop for Test Preparation.”",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d7-other-7",
            "title": "“Buy” the shorter PowerPrep 1 Test for $0. This being untimed, ETS won't provide a score, but don't worry - we've provided a way below for you to get your score.",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w1d7-other-8",
            "title": "Take the test.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d7-other-9",
            "title": "Skip the essay section.",
            "optional": false,
            "type": "writing",
            "links": []
          },
          {
            "id": "w1d7-other-10",
            "title": "Do both Verbal and both Quant sections (total time: approximately 1.5 hours). As this is untimed, please time yourself. 18/23 minutes for verbal section 1/2 respectively; 21/26 for quant section 1 and 2 respectively. If you have extra time, adjust them accordingly.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w1d7-other-11",
            "title": "GregMAT Full Practice Test 1",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w1d7-other-12",
            "title": "This can be used if you've already taken PP1 (from a prior attempt), or want to conserve the ETS tests (since there's so few of them). However, note that these are not ETS questions (i.e, us at GregMAT write them), which means that the quality will not be as good as ETS, and the score you get may not be as accurate as well either. To take the GregMAT Full Practice Test, go to this page. As with PP1, skip the writing.",
            "optional": false,
            "type": "writing",
            "links": [
              {
                "text": "this page",
                "url": "https://www.gregmat.com/quizzes/quiz/full-practice-test-beta-1"
              }
            ]
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w1d7-review-1",
            "title": "For GregMAT Full Practice Test 1, answers are available when you review the quiz (as videos for each problem)",
            "optional": false,
            "type": "quiz",
            "links": []
          },
          {
            "id": "w1d7-review-2",
            "title": "If you are taking the untimed version for PP1, use this form to convert your raw scores into the 130-170 scaled score for quant and verbal.",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "this form",
                "url": "https://www.gregmat.com/misc/powerprep-1-conversion-form"
              }
            ]
          }
        ]
      },
      {
        "category": "Reflection",
        "icon": "🪞",
        "tasks": [
          {
            "id": "w1d7-reflection-1",
            "title": "Make a list of your strengths and weaknesses.",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w1d7-reflection-2",
            "title": "NOTE: This lesson plan assumes that you need help in ALL areas of the test, but, if the PowerPrep 1 result indicated otherwise, you can adjust the study plan accordingly.",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w1d7-reflection-3",
            "title": "FINAL NOTE: Don’t get too upset if your score is not where you want it to be. Remember — this is just a diagnostic test. It’s not the final result.",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w2d1",
    "type": "day",
    "week": 2,
    "day": 1,
    "label": "Day 1",
    "title": "Week 2 - Day 1",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d1-quant-1",
            "title": "Algebraic Expressions I",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Algebraic Expressions I",
                "url": "https://www.gregmat.com/class/algebraic-expressions-i"
              }
            ]
          },
          {
            "id": "w2d1-quant-2",
            "title": "Algebraic Expression II",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Algebraic Expression II",
                "url": "https://www.gregmat.com/class/algebraic-expressions-ii"
              }
            ]
          },
          {
            "id": "w2d1-quant-3",
            "title": "Exponent Rules",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Exponent Rules",
                "url": "https://www.gregmat.com/class/exponents"
              }
            ]
          },
          {
            "id": "w2d1-quant-4",
            "title": "Starting video: Variables",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d1-quant-5",
            "title": "Ending video: Exponent Rules Review",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d1-verbal-1",
            "title": "(Optional) The “Piece” Method",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "The “Piece” Method",
                "url": "https://www.gregmat.com/class/verbal-misc-the-piece-method-1"
              }
            ]
          },
          {
            "id": "w2d1-verbal-2",
            "title": "More “Math” strategy exposure",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d1-quant-6",
            "title": "(Optional for Prepswift Users) Complete Algebraic Expressions Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Algebraic Expressions Practice",
                "url": "https://www.gregmat.com/class/algebraic-expressions-practice"
              }
            ]
          },
          {
            "id": "w2d1-quant-7",
            "title": "(Optional for Prepswift Users) Complete Exponent Rules Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Exponent Rules Practice",
                "url": "https://www.gregmat.com/class/exponents-practice"
              }
            ]
          },
          {
            "id": "w2d1-quant-8",
            "title": "(Optional for all) Complete Manhattan 5-lb chapters on Exponents and Roots",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d1-quant-9",
            "title": "3rd Edition: Chapter 14, p. 461",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d1-quant-10",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d1-quant-11",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w2d1-quant-12",
            "title": "Under TAGS, filter by Exponents and Roots",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d1-quant-13",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w2d1-review-1",
            "title": "Day 3 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=3"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d1-verbal-3",
            "title": "Revise Groups 1-3 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3 Vocabulary",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              }
            ]
          },
          {
            "id": "w2d1-verbal-4",
            "title": "Day 3 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=3"
              }
            ]
          },
          {
            "id": "w2d1-verbal-5",
            "title": "Study Group 4 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 4 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501826685/set-4-flash-cards/"
              }
            ]
          },
          {
            "id": "w2d1-verbal-6",
            "title": "Continue reviewing mistakes from PowerPrep I exam",
            "optional": false,
            "type": "test",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w2d2",
    "type": "day",
    "week": 2,
    "day": 2,
    "label": "Day 2",
    "title": "Week 2 - Day 2",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d2-quant-1",
            "title": "Linear Equations",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Linear Equations",
                "url": "https://www.gregmat.com/class/linear-equations"
              }
            ]
          },
          {
            "id": "w2d2-quant-2",
            "title": "Quadratic Equations",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Quadratic Equations",
                "url": "https://www.gregmat.com/class/quadratic-equations"
              }
            ]
          },
          {
            "id": "w2d2-quant-3",
            "title": "Starting video: Common Exponent Mistakes",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d2-quant-4",
            "title": "Ending video: Elimination Method",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d2-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w2d2-verbal-2",
            "title": "TC and SE Session 7",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 7",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-7"
              }
            ]
          },
          {
            "id": "w2d2-verbal-3",
            "title": "Watch from 20:00 - end",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d2-verbal-4",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 7",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 7",
                "url": "https://www.gregmat.com/class/2024-edition-tc-and-se-strategy-series-session-7"
              }
            ]
          },
          {
            "id": "w2d2-verbal-5",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 7",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 7",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-7"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d2-quant-5",
            "title": "(Optional for Prepswift Users) Complete Linear and Quadratic Equations Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Linear and Quadratic Equations Practice",
                "url": "https://www.gregmat.com/class/linear-and-quadratic-equations-practice"
              }
            ]
          },
          {
            "id": "w2d2-quant-6",
            "title": "(Optional for all) Complete Manhattan 5-lb chapter on Algebra",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d2-quant-7",
            "title": "3rd Edition: Chapter 8, p. 323",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d2-quant-8",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d2-quant-9",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w2d2-quant-10",
            "title": "Under TAGS, filter by Linear Equations and Quadratic Equations",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d2-quant-11",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w2d2-quant-12",
            "title": "Take the GRE Quant Flashcards Group 1 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 1 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-1-quiz"
              }
            ]
          },
          {
            "id": "w2d2-quant-13",
            "title": "Day 3 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=3"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d2-verbal-6",
            "title": "Complete TC and SE homework (depending on the series you're following)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d2-verbal-7",
            "title": "Homework is under the video",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d2-verbal-8",
            "title": "Revise Groups 1-3 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3 Vocabulary",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              }
            ]
          },
          {
            "id": "w2d2-verbal-9",
            "title": "Day 3 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=3"
              }
            ]
          },
          {
            "id": "w2d2-verbal-10",
            "title": "Study Group 4 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 4 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501826685/set-4-flash-cards/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w2d3",
    "type": "day",
    "week": 2,
    "day": 3,
    "label": "Day 3",
    "title": "Week 2 - Day 3",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d3-quant-1",
            "title": "Linear Inequalities",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Linear Inequalities",
                "url": "https://www.gregmat.com/class/linear-inequalities"
              }
            ]
          },
          {
            "id": "w2d3-quant-2",
            "title": "Functions",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Functions",
                "url": "https://www.gregmat.com/class/functions"
              }
            ]
          },
          {
            "id": "w2d3-quant-3",
            "title": "Sequences Part I",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Sequences Part I",
                "url": "https://www.gregmat.com/class/quant-misc-sequences"
              }
            ]
          },
          {
            "id": "w2d3-quant-4",
            "title": "(Optional) Sequences Part II",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Sequences Part II",
                "url": "https://www.gregmat.com/class/quant-misc-sequences-ii"
              }
            ]
          },
          {
            "id": "w2d3-quant-5",
            "title": "Starting video: System of Equations Shortcut",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d3-quant-6",
            "title": "Ending video: Functions 1",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d3-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w2d3-verbal-2",
            "title": "TC and SE Session",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session ",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-8"
              }
            ]
          },
          {
            "id": "w2d3-verbal-3",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 8",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 8",
                "url": "https://www.gregmat.com/class/2024-edition-tc-and-se-strategy-series-session-8"
              }
            ]
          },
          {
            "id": "w2d3-verbal-4",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 8",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 8",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-8"
              }
            ]
          },
          {
            "id": "w2d3-verbal-5",
            "title": "Session 8 Practice Session",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Session 8 Practice Session",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-9"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d3-quant-7",
            "title": "(Optional for Prepswift Users) Complete Linear Inequalities and Functions Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Linear Inequalities and Functions Practice",
                "url": "https://www.gregmat.com/class/linear-inequalities-and-functions-practice"
              }
            ]
          },
          {
            "id": "w2d3-quant-8",
            "title": "(Optional) Complete Manhattan 5-lb chapters on Functions, Formulas, and Sequences",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d3-quant-9",
            "title": "3rd Edition: Chapter 10, p. 363",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d3-quant-10",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d3-quant-11",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w2d3-quant-12",
            "title": "Under TAGS, filter by Inequalities, Functions, and Sequences",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d3-quant-13",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w2d3-quant-14",
            "title": "Study Group 4 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 4 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-4"
              }
            ]
          },
          {
            "id": "w2d3-quant-15",
            "title": "Day 4 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=4"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d3-verbal-6",
            "title": "Complete TC and SE Homework (depending on the series you're following)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d3-verbal-7",
            "title": "Homework is under the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d3-verbal-8",
            "title": "Revise Groups 1-3 and Group 4 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Group 4",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_4.PNG"
              }
            ]
          },
          {
            "id": "w2d3-verbal-9",
            "title": "​​​​​​​Day 4 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=4"
              }
            ]
          },
          {
            "id": "w2d3-verbal-10",
            "title": "Study Group 5 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 5 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501831410/set-5-flash-cards/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w2d4",
    "type": "day",
    "week": 2,
    "day": 4,
    "label": "Day 4",
    "title": "Week 2 - Day 4",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d4-quant-1",
            "title": "Words to Algebra",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Words to Algebra",
                "url": "https://www.gregmat.com/class/applications-part-1-words-to-algebra"
              }
            ]
          },
          {
            "id": "w2d4-quant-2",
            "title": "Work and Distance",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Work and Distance",
                "url": "https://www.gregmat.com/class/work-and-distance"
              }
            ]
          },
          {
            "id": "w2d4-quant-3",
            "title": "Starting video: Functions 2",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d4-quant-4",
            "title": "Ending video: Distance = Rate x Time",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d4-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w2d4-verbal-2",
            "title": "TC and SE Session 9",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 9",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-9"
              }
            ]
          },
          {
            "id": "w2d4-verbal-3",
            "title": "Watch homework review from Session 8 only (beginning - 38:00)",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d4-verbal-4",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 9",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 9",
                "url": "https://www.gregmat.com/class/2024-edition-tc-and-se-strategy-series-session-9"
              }
            ]
          },
          {
            "id": "w2d4-verbal-5",
            "title": "(2024 Edition with ETS material) TC and SE Strategy Series - Sesison 9",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS material) TC and SE Strategy Series - Sesison 9",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-9-ghaf"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d4-quant-5",
            "title": "(Optional for Prepswift Users) Complete Words to Algebra Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Words to Algebra Practice",
                "url": "https://www.gregmat.com/class/applications-words-to-algebra-practice"
              }
            ]
          },
          {
            "id": "w2d4-quant-6",
            "title": "(Optional for Prepswift Users) Complete Work and Distance Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Work and Distance Practice",
                "url": "https://www.gregmat.com/class/work-and-distance-practice"
              }
            ]
          },
          {
            "id": "w2d4-quant-7",
            "title": "(Optional) Complete Manhattan 5-lb chapters on Word Problems and Work and rates and Work",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d4-quant-8",
            "title": "3rd Edition: Chapter 16, p. 493",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d4-quant-9",
            "title": "3rd Edition: Chapter 18, p. 531",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d4-quant-10",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d4-quant-11",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w2d4-quant-12",
            "title": "Under TAGS, filter by Word Problems and Distance/Work/Rates",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d4-quant-13",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w2d4-quant-14",
            "title": "Take the GRE Quant Flashcards Group 2 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 2 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-2-quiz"
              }
            ]
          },
          {
            "id": "w2d4-quant-15",
            "title": "Day 4 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=4"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d4-verbal-6",
            "title": "Complete TC and SE Homework (depending on the series you're following)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d4-verbal-7",
            "title": "Homework is under the video if there is any.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d4-verbal-8",
            "title": "Revise Groups 1-3 and Group 4 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Group 4",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_4.PNG"
              }
            ]
          },
          {
            "id": "w2d4-verbal-9",
            "title": "Day 4 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=4"
              }
            ]
          },
          {
            "id": "w2d4-verbal-10",
            "title": "Study Group 5 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 5 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501831410/set-5-flash-cards/"
              }
            ]
          },
          {
            "id": "w2d4-verbal-11",
            "title": "Take Groups 1-5 Sentence Equivalence Quiz #1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 1-5 Sentence Equivalence Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/sentence-equivalence-quiz-groups-1-5-cnfm"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w2d5",
    "type": "day",
    "week": 2,
    "day": 5,
    "label": "Day 5",
    "title": "Week 2 - Day 5",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d5-quant-1",
            "title": "Mixture Problems",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Mixture Problems",
                "url": "https://www.gregmat.com/class/mixture-problems"
              }
            ]
          },
          {
            "id": "w2d5-quant-2",
            "title": "Interest Problems",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Interest Problems",
                "url": "https://www.gregmat.com/class/interest-problems"
              }
            ]
          },
          {
            "id": "w2d5-quant-3",
            "title": "(PrepSwift Users) www.prepswift.com",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "www.prepswift.com",
                "url": "https://www.prepswift.com/gre-quant"
              }
            ]
          },
          {
            "id": "w2d5-quant-4",
            "title": "Starting video: Relative Speed",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d5-quant-5",
            "title": "Ending video: Linear Equations on the Plane",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d5-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w2d5-verbal-2",
            "title": "TC and SE Session 9",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 9",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-9"
              }
            ]
          },
          {
            "id": "w2d5-verbal-3",
            "title": "Watch from 38:00 - end",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d5-verbal-4",
            "title": "Finish the Session 9 video from either 2024 series if you havent done so already.",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d5-quant-6",
            "title": "(Optional for Prepswift Users) Complete Mixture and Interest Problems Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Complete Mixture and Interest Problems Practice",
                "url": "https://www.gregmat.com/class/mixture-and-interest-practice"
              }
            ]
          },
          {
            "id": "w2d5-quant-7",
            "title": "(Optional) Complete Manhattan 5-lb chapters on Two-Variable Word Problems",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d5-quant-8",
            "title": "3rd Edition: Chapter 17, p. 509",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d5-quant-9",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d5-quant-10",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w2d5-quant-11",
            "title": "Under TAGS, filter by Mixture Problems and Simple Interest/Compound Interest",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d5-quant-12",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w2d5-review-1",
            "title": "Day 4 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=4"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d5-verbal-5",
            "title": "Revise Groups 1-3 and Groups 4-5 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-5",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-5.PNG"
              }
            ]
          },
          {
            "id": "w2d5-verbal-6",
            "title": "Day 5 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=5"
              }
            ]
          },
          {
            "id": "w2d5-verbal-7",
            "title": "Study Group 6 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 6 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501832146/set-6-flash-cards/"
              }
            ]
          },
          {
            "id": "w2d5-verbal-8",
            "title": "Complete Big Book Test 1, Section 1 and Section 4 Text Completion Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d5-verbal-9",
            "title": "Section 1: p. 29",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d5-verbal-10",
            "title": "Section 4: p. 48",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w2d5-review-2",
            "title": "Take Groups 1-5 Sentence Equivalence Quiz #2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 1-5 Sentence Equivalence Quiz #2",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-sentence-equivalence-quiz-groups-1-5-tenm"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w2d6",
    "type": "day",
    "week": 2,
    "day": 6,
    "label": "Day 6",
    "title": "Week 2 - Day 6",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d6-quant-1",
            "title": "Coordinate Geometry 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Coordinate Geometry 1",
                "url": "https://www.gregmat.com/class/coordinate-geometry-1"
              }
            ]
          },
          {
            "id": "w2d6-quant-2",
            "title": "Coordinate Geometry 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Coordinate Geometry 2",
                "url": "https://www.gregmat.com/class/coordinate-geometry-2"
              }
            ]
          },
          {
            "id": "w2d6-quant-3",
            "title": "Coordinate Geometry Essentials I",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Coordinate Geometry Essentials I",
                "url": "https://www.gregmat.com/class/coordinate-geometry-essentials-lesson-1"
              }
            ]
          },
          {
            "id": "w2d6-quant-4",
            "title": "Coordinate Geometry Essentials II",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Coordinate Geometry Essentials II",
                "url": "https://www.gregmat.com/class/coordinate-geometry-essentials-lesson-2"
              }
            ]
          },
          {
            "id": "w2d6-quant-5",
            "title": "Coordinate Geometry Essentials III",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Coordinate Geometry Essentials III",
                "url": "https://www.gregmat.com/class/coordinate-geometry-essentials-lesson-3"
              }
            ]
          },
          {
            "id": "w2d6-quant-6",
            "title": "Starting video: Calculating Slope",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d6-quant-7",
            "title": "Ending video: Two Inequalities on the Plane",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d6-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w2d6-verbal-2",
            "title": "TC and SE Session 10",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 10",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-10"
              }
            ]
          },
          {
            "id": "w2d6-verbal-3",
            "title": "Watch from 30:30 - end",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d6-verbal-4",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 10",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 10",
                "url": "https://www.gregmat.com/class/2024-edition-tc-and-se-strategy-series-session-10"
              }
            ]
          },
          {
            "id": "w2d6-verbal-5",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 10",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 10",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-10-cyfc"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d6-quant-8",
            "title": "(Optional for Prepswift Users) Complete Manhattan 5-lb chapter on Variables-in-the-Choices and Coordinate Geometry",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d6-quant-9",
            "title": "3rd Edition: Chapter 19, p. 551",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d6-quant-10",
            "title": "3rd Edition: Chapter 28, p. 755",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d6-quant-11",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d6-quant-12",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w2d6-quant-13",
            "title": "Under TAGS, filter by Coordinate Geometry",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w2d6-quant-14",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w2d6-quant-15",
            "title": "Take the GRE Quant Flashcards Group 3 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 3 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-3-quiz"
              }
            ]
          },
          {
            "id": "w2d6-quant-16",
            "title": "Day 4 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=4"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d6-verbal-6",
            "title": "Complete TC and SE Homework (depending on the series you're following)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d6-verbal-7",
            "title": "Homework is under the video if there is any.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d6-verbal-8",
            "title": "Revise Groups 1-3 and Groups 4-5 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-5",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-5.PNG"
              }
            ]
          },
          {
            "id": "w2d6-verbal-9",
            "title": "Day 5 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=5"
              }
            ]
          },
          {
            "id": "w2d6-verbal-10",
            "title": "Study Group 6 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 6 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501832146/set-6-flash-cards/"
              }
            ]
          },
          {
            "id": "w2d6-verbal-11",
            "title": "Complete Groups 4-6 Vocab Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 4-6 Vocab Quiz",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-4-6"
              }
            ]
          },
          {
            "id": "w2d6-verbal-12",
            "title": "(Optional) Complete Groups 4-6 Vocab Quiz Part 2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Complete Groups 4-6 Vocab Quiz Part 2",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-4-6-part-2"
              }
            ]
          },
          {
            "id": "w2d6-verbal-13",
            "title": "(Optional) Complete Groups 4-6 Vocab Quiz Part 3",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Complete Groups 4-6 Vocab Quiz Part 3",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-march-11-2021"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w2d7",
    "type": "day",
    "week": 2,
    "day": 7,
    "label": "Day 7",
    "title": "Week 2 - Day 7",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d7-quant-1",
            "title": "Graphing Functions",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Graphing Functions",
                "url": "https://www.gregmat.com/class/graphing-functions"
              }
            ]
          },
          {
            "id": "w2d7-quant-2",
            "title": "Starting video: Quadratic Equations on the Plane",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d7-quant-3",
            "title": "Ending video: Graph Shifts",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d7-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w2d7-verbal-2",
            "title": "TC and SE Session 11",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 11",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-11"
              }
            ]
          },
          {
            "id": "w2d7-verbal-3",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 11",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 11",
                "url": "https://www.gregmat.com/class/2024-edition-tc-and-se-strategy-series-session-11"
              }
            ]
          },
          {
            "id": "w2d7-verbal-4",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 11",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 11",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-11-miy2"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w2d7-quant-4",
            "title": "(Optional for Prepswift Users) Complete Graphing Functions Practice",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Graphing Functions Practice",
                "url": "https://www.gregmat.com/class/coordinate-geometry-practice"
              }
            ]
          },
          {
            "id": "w2d7-quant-5",
            "title": "(Optional for Prepswift Users) Complete Mega Algebra Practice I",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Mega Algebra Practice I",
                "url": "https://www.gregmat.com/class/algebra-mega-practice-i"
              }
            ]
          },
          {
            "id": "w2d7-quant-6",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d7-quant-7",
            "title": "Study Group 5 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 5 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-5"
              }
            ]
          },
          {
            "id": "w2d7-quant-8",
            "title": "Day 5 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=5"
              }
            ]
          },
          {
            "id": "w2d7-quant-9",
            "title": "(Optional) Complete Mega Algebra Practice II",
            "optional": true,
            "type": "practice",
            "links": [
              {
                "text": "Complete Mega Algebra Practice II",
                "url": "https://www.gregmat.com/class/algebra-mega-practice-ii"
              }
            ]
          },
          {
            "id": "w2d7-quant-10",
            "title": "(Optional) Test Your Algebra Foundation:",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d7-quant-11",
            "title": "Quiz 1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quiz 1",
                "url": "https://www.gregmat.com/quizzes/quiz/algebra-foundation-quiz-1-hadr"
              }
            ]
          },
          {
            "id": "w2d7-quant-12",
            "title": "Quiz 2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quiz 2",
                "url": "https://www.gregmat.com/quizzes/quiz/algebra-fundamentals-quiz-2-awdv"
              }
            ]
          },
          {
            "id": "w2d7-quant-13",
            "title": "Video solutions to both can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          },
          {
            "id": "w2d7-quant-14",
            "title": "(Optional) Test Your Coordinate Geometry Foundation:",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d7-quant-15",
            "title": "Quiz 1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quiz 1",
                "url": "https://www.gregmat.com/quizzes/quiz/coordinate-geometry-fundamentals-quiz-1-aplf"
              }
            ]
          },
          {
            "id": "w2d7-quant-16",
            "title": "Quiz 2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quiz 2",
                "url": "https://www.gregmat.com/quizzes/quiz/coordinate-geometry-fundamentals-quiz-2-uytr"
              }
            ]
          },
          {
            "id": "w2d7-quant-17",
            "title": "Video solutions to both can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w2d7-verbal-5",
            "title": "Complete TC and SE Homework (depending on the series you're following)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d7-verbal-6",
            "title": "Homework is under video if there is any.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w2d7-verbal-7",
            "title": "Revise Groups 1-3 and Groups 4-6 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              }
            ]
          },
          {
            "id": "w2d7-verbal-8",
            "title": "Day 6 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=6"
              }
            ]
          },
          {
            "id": "w2d7-verbal-9",
            "title": "Study Group 7 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 7 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501832777/set-7-flash-cards/"
              }
            ]
          },
          {
            "id": "w2d7-verbal-10",
            "title": "(Optional) Complete Big Book Test 2, Section 1 and Section 4 Text Completion Questions",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d7-verbal-11",
            "title": "Section 1: p. 69",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w2d7-verbal-12",
            "title": "Section 4: p. 88",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w3d1",
    "type": "day",
    "week": 3,
    "day": 1,
    "label": "Day 1",
    "title": "Week 3 - Day 1",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d1-quant-1",
            "title": "Lines & Angles",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Lines & Angles",
                "url": "https://www.gregmat.com/class/lines-and-angles"
              }
            ]
          },
          {
            "id": "w3d1-quant-2",
            "title": "Polygons",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Polygons",
                "url": "https://www.gregmat.com/class/polygons"
              }
            ]
          },
          {
            "id": "w3d1-quant-3",
            "title": "Starting video: Lines and Vocabulary",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d1-quant-4",
            "title": "Ending video: Exterior Angle of Regular Polygon",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d1-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w3d1-verbal-2",
            "title": "TC and SE Session 12",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "TC and SE Session 12",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-session-12"
              }
            ]
          },
          {
            "id": "w3d1-verbal-3",
            "title": "(2024 Edition) TC and SE Strategy Series - Session 12",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Series - Session 12",
                "url": "https://www.gregmat.com/class/2024-edition-tc-and-se-strategy-series-session-12"
              }
            ]
          },
          {
            "id": "w3d1-verbal-4",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 12",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Series - Session 12",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-session-12"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d1-quant-5",
            "title": "Complete Lines & Angles and Polygons Practice",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Lines & Angles and Polygons Practice",
                "url": "https://www.gregmat.com/class/angles-lines-and-polygons-practice"
              }
            ]
          },
          {
            "id": "w3d1-quant-6",
            "title": "Catch up on any missed practice exercises",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d1-quant-7",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d1-quant-8",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w3d1-quant-9",
            "title": "Under TAGS, filter by Lines and Polygons",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w3d1-quant-10",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w3d1-review-1",
            "title": "Day 5 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=5"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d1-verbal-5",
            "title": "Revise Groups 1-3 and Groups 4-6 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              }
            ]
          },
          {
            "id": "w3d1-verbal-6",
            "title": "Day 6 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=6"
              }
            ]
          },
          {
            "id": "w3d1-verbal-7",
            "title": "Study Group 7 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "7 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501832777/set-7-flash-cards/"
              }
            ]
          },
          {
            "id": "w3d1-verbal-8",
            "title": "Complete Big Book Test 3, Section 3 and Section 5 Text Completion Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d1-verbal-9",
            "title": "Section 3: p. 122",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d1-verbal-10",
            "title": "Section 5: p. 134",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w3d1-review-2",
            "title": "Take quick Group 7 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Group 7 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/test-your-gre-vocabulary-knowledge-gre-vocabulary-test-7"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w3d2",
    "type": "day",
    "week": 3,
    "day": 2,
    "label": "Day 2",
    "title": "Week 3 - Day 2",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d2-quant-1",
            "title": "Triangles I",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Triangles I",
                "url": "https://www.gregmat.com/class/triangles-i"
              }
            ]
          },
          {
            "id": "w3d2-quant-2",
            "title": "Triangles II",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Triangles II",
                "url": "https://www.gregmat.com/class/triangles-ii"
              }
            ]
          },
          {
            "id": "w3d2-quant-3",
            "title": "Starting video: Types of Triangles",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d2-quant-4",
            "title": "Ending video: 30-60-90 Triangles",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d2-verbal-1",
            "title": "The “Piece” Method Part 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "The “Piece” Method Part 2",
                "url": "https://www.gregmat.com/class/verbal-misc-the-piece-method-2"
              }
            ]
          },
          {
            "id": "w3d2-verbal-2",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w3d2-verbal-3",
            "title": "(2024 Edition) TC and SE Strategy Practice Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Practice Session 1",
                "url": "https://www.gregmat.com/class/2024-edition-tc-and-se-strategy-series-practice-session-1"
              }
            ]
          },
          {
            "id": "w3d2-verbal-4",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Practice Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Practice Session 1",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-strategy-practice-session-1"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d2-quant-5",
            "title": "Complete Triangles Practice",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Triangles Practice",
                "url": "https://www.gregmat.com/class/triangles-practice"
              }
            ]
          },
          {
            "id": "w3d2-quant-6",
            "title": "(Optional) Complete Manhattan 5-lb chapter on Triangles",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d2-quant-7",
            "title": "3rd Edition: Chapter 27, p. 723",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w3d2-quant-8",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d2-quant-9",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w3d2-quant-10",
            "title": "Under TAGS, filter by Triangles",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w3d2-quant-11",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w3d2-quant-12",
            "title": "Take the GRE Quant Flashcards Group 4 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 4 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-4-quiz"
              }
            ]
          },
          {
            "id": "w3d2-quant-13",
            "title": "Day 5 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=5"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d2-verbal-5",
            "title": "Revise Groups 1-3, Groups 4-6, and Group 7 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Group 7",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_7.PNG"
              }
            ]
          },
          {
            "id": "w3d2-verbal-6",
            "title": "Day 7 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=7"
              }
            ]
          },
          {
            "id": "w3d2-verbal-7",
            "title": "Study Group 8 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 8 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501833769/set-8-flash-cards/"
              }
            ]
          },
          {
            "id": "w3d2-verbal-8",
            "title": "Complete Big Book Test 4, Section 1 and Section 4 Text Completion Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d2-verbal-9",
            "title": "Section 1: p. 149",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d2-verbal-10",
            "title": "Section 4: p. 168",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w3d3",
    "type": "day",
    "week": 3,
    "day": 3,
    "label": "Day 3",
    "title": "Week 3 - Day 3",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d3-quant-1",
            "title": "Quadrilaterals",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Quadrilaterals",
                "url": "https://www.gregmat.com/class/quadrilaterals"
              }
            ]
          },
          {
            "id": "w3d3-quant-2",
            "title": "Circles",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Circles",
                "url": "https://www.gregmat.com/class/circles"
              }
            ]
          },
          {
            "id": "w3d3-quant-3",
            "title": "Starting video: 45-45-90 Triangles",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d3-quant-4",
            "title": "Ending video: Area of Trapezoid",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d3-verbal-1",
            "title": "Three-Blank Text Completion Questions",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Three-Blank Text Completion Questions",
                "url": "https://www.gregmat.com/class/verbal-misc-the-three-blankers"
              }
            ]
          },
          {
            "id": "w3d3-verbal-2",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w3d3-verbal-3",
            "title": "(2024 Edition) TC and SE Strategy Practice Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Practice Session 2",
                "url": "https://www.gregmat.com/class/2024-edition-tc-and-se-strategy-series-practice-session-2"
              }
            ]
          },
          {
            "id": "w3d3-verbal-4",
            "title": "(2024 Edition with ETS Material) TC and SE Strategy Practice Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) TC and SE Strategy Practice Session 2",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-tc-and-se-practice-session-2"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d3-quant-5",
            "title": "Complete Quadrilaterals Practice",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Quadrilaterals Practice",
                "url": "https://www.gregmat.com/class/quadrilaterals-practice"
              }
            ]
          },
          {
            "id": "w3d3-quant-6",
            "title": "Complete Circles Practice",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Circles Practice",
                "url": "https://www.gregmat.com/class/circles-practice"
              }
            ]
          },
          {
            "id": "w3d3-quant-7",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d3-quant-8",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w3d3-quant-9",
            "title": "Under TAGS, filter by Quadrilaterals and Circles",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w3d3-quant-10",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w3d3-quant-11",
            "title": "Study Group 6 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 6 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-6"
              }
            ]
          },
          {
            "id": "w3d3-quant-12",
            "title": "Day 6 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=6"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d3-verbal-5",
            "title": "Revise Groups 1-3, Groups 4-6, and Group 7 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Group 7",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_7.PNG"
              }
            ]
          },
          {
            "id": "w3d3-verbal-6",
            "title": "Day 7 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=7"
              }
            ]
          },
          {
            "id": "w3d3-verbal-7",
            "title": "Study Group 8 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 8 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501833769/set-8-flash-cards/"
              }
            ]
          },
          {
            "id": "w3d3-verbal-8",
            "title": "Complete Big Book Test 5, Section 2 and Section 4 Text Completion Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d3-verbal-9",
            "title": "Section 2: p. 195",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d3-verbal-10",
            "title": "Section 4: p. 208",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w3d3-review-1",
            "title": "Take quick Group 8 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Group 8 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/test-your-gre-vocabulary-knowledge-gre-vocabulary-test-8"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w3d4",
    "type": "day",
    "week": 3,
    "day": 4,
    "label": "Day 4",
    "title": "Week 3 - Day 4",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d4-quant-1",
            "title": "GRE Geometry",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "GRE Geometry",
                "url": "https://www.gregmat.com/class/quant-misc-gre-geometry"
              }
            ]
          },
          {
            "id": "w3d4-quant-2",
            "title": "Starting video: A Seemingly Impossible Problem III",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d4-quant-3",
            "title": "Ending video: Length of an Arc",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d4-verbal-1",
            "title": "The Grammar Strategy",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "The Grammar Strategy",
                "url": "https://www.gregmat.com/class/verbal-misc-grammar-strategy"
              }
            ]
          },
          {
            "id": "w3d4-verbal-2",
            "title": "Grammar for Text Completion",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Grammar for Text Completion",
                "url": "https://www.gregmat.com/class/verbal-misc-grammar-text-completion"
              }
            ]
          },
          {
            "id": "w3d4-verbal-3",
            "title": "(2024 Edition) TC and SE Strategy Practice Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) TC and SE Strategy Practice Session 3",
                "url": "https://www.gregmat.com/class/2024-edition-tc-and-se-strategy-series-practice-session-3"
              }
            ]
          },
          {
            "id": "w3d4-verbal-4",
            "title": "This is for the 2024 Edition series WITHOUT ETS material. The one with ETS material didn't have a third practice session.",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d4-quant-4",
            "title": "Complete Practice Session: All Previous Geometry",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Practice Session: All Previous Geometry",
                "url": "https://www.gregmat.com/class/practice-incorporoating-all-previous-geometry-lessons"
              }
            ]
          },
          {
            "id": "w3d4-quant-5",
            "title": "Catch up on any missed practice exercises",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d4-quant-6",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d4-quant-7",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w3d4-quant-8",
            "title": "Under TAGS, filter by Lines, Polygons, Triangles, Quadrilaterals and Circles",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w3d4-quant-9",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w3d4-quant-10",
            "title": "Take the GRE Quant Flashcards Group 5 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 5 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-5-quiz"
              }
            ]
          },
          {
            "id": "w3d4-quant-11",
            "title": "Day 6 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=6"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d4-verbal-5",
            "title": "Revise Groups 1-3, Groups 4-6, and Groups 7-8 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-8 ",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-8.PNG"
              }
            ]
          },
          {
            "id": "w3d4-verbal-6",
            "title": "Day 8 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=8"
              }
            ]
          },
          {
            "id": "w3d4-verbal-7",
            "title": "Study Group 9 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 9 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501906822/set-9-flash-cards/"
              }
            ]
          },
          {
            "id": "w3d4-verbal-8",
            "title": "Complete Big Book Test 6, Section 1 and Section 2",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d4-verbal-9",
            "title": "Section 1: p. 229",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d4-verbal-10",
            "title": "Section 2: p. 235",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w3d5",
    "type": "day",
    "week": 3,
    "day": 5,
    "label": "Day 5",
    "title": "Week 3 - Day 5",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d5-quant-1",
            "title": "3D Figures",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "3D Figures",
                "url": "https://www.gregmat.com/class/3d-figures"
              }
            ]
          },
          {
            "id": "w3d5-quant-2",
            "title": "(Optional) Volume and Surface Area Unit from Khan Academy",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Volume and Surface Area Unit from Khan Academy",
                "url": "https://www.khanacademy.org/math/geometry-home/geometry-volume-surface-area"
              }
            ]
          },
          {
            "id": "w3d5-quant-3",
            "title": "Starting video: Archimedes Calculates Pi",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d5-quant-4",
            "title": "Ending video: Inscribed Polygon Problems II",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d5-verbal-1",
            "title": "Challenging Two-Blank Text Completion Questions",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Challenging Two-Blank Text Completion Questions",
                "url": "https://www.gregmat.com/class/verbal-misc-double-trouble"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d5-quant-5",
            "title": "Complete 3D Figures Practice",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "3D Figures Practice",
                "url": "https://www.gregmat.com/class/3d-figures-practice"
              }
            ]
          },
          {
            "id": "w3d5-quant-6",
            "title": "(Optional) Complete Manhattan 5-lb chapters on Polygons and Rectangular Solids and Circles and Cylinders",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d5-quant-7",
            "title": "3rd Edition: Chapter 25, p. 693",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w3d5-quant-8",
            "title": "3rd Edition: Chapter 26, p. 707",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w3d5-quant-9",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d5-quant-10",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w3d5-quant-11",
            "title": "Under TOP LEVEL CATEGORY, filter by Geometry",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w3d5-quant-12",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w3d5-review-1",
            "title": "Day 6 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=6"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d5-verbal-2",
            "title": "Revise Groups 1-3, Groups 4-6, and Groups 7-8 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-8 ",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-8.PNG"
              }
            ]
          },
          {
            "id": "w3d5-verbal-3",
            "title": "Day 8 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=8"
              }
            ]
          },
          {
            "id": "w3d5-verbal-4",
            "title": "Study Group 9 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 9 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501906822/set-9-flash-cards/"
              }
            ]
          },
          {
            "id": "w3d5-verbal-5",
            "title": "Complete Big Book Test 7, Section 1 and Section 2 Text Completion Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d5-verbal-6",
            "title": "Section 1: p. 267",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d5-verbal-7",
            "title": "Section 2: p. 273",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w3d5-review-2",
            "title": "Complete Groups 7-9 Vocab Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 7-9 Vocab Quiz",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-7-9"
              }
            ]
          },
          {
            "id": "w3d5-review-3",
            "title": "(Optional) Complete Groups 7-9 Vocab Quiz Part 2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 7-9 Vocab Quiz Part 2",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-7-9-part-2"
              }
            ]
          },
          {
            "id": "w3d5-review-4",
            "title": "(Optional) Complete Groups 7-9 Vocab Quiz Part 3",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Complete Groups 7-9 Vocab Quiz Part 3",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-march-16-2021"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w3d6",
    "type": "day",
    "week": 3,
    "day": 6,
    "label": "Day 6",
    "title": "Week 3 - Day 6",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d6-quant-1",
            "title": "Difficult Geometry Questions",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Difficult Geometry Questions",
                "url": "https://www.gregmat.com/class/quant-misc-solving-multiple-ways"
              }
            ]
          },
          {
            "id": "w3d6-quant-2",
            "title": "Starting video: Concentric Circles",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d6-quant-3",
            "title": "Ending video: Longest Diagonal of Rectangular Solid",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d6-verbal-1",
            "title": "(Optional) Text Completion Supplement",
            "optional": true,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d6-verbal-2",
            "title": "Time Contrast and Previously Referenced",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Time Contrast and Previously Referenced",
                "url": "https://www.gregmat.com/class/verbal-misc-previously-referenced-time-contrast"
              }
            ]
          },
          {
            "id": "w3d6-verbal-3",
            "title": "Block of 4 (from 27 mins onwards)",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Block of 4",
                "url": "https://www.gregmat.com/class/2024-edition-tc-and-se-strategy-series-session-7"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w3d6-quant-4",
            "title": "Complete MEGA Geometry Practice Session",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "MEGA Geometry Practice Session",
                "url": "https://www.gregmat.com/class/practice-all-geometry-concepts"
              }
            ]
          },
          {
            "id": "w3d6-quant-5",
            "title": "Complete Big Book Test 1, Section 3 and Section 7 Quantitative Questions (SKIP CHART QUESTIONS)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d6-quant-6",
            "title": "Section 3: pp. 41-44; 47",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d6-quant-7",
            "title": "Section 7: pp. 60-64; 66",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w3d6-review-1",
            "title": "(Optional) Complete Manhattan 5-lb Chapter on Mixed Geometry",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d6-review-2",
            "title": "3rd Edition: Chapter 29, p. 773",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w3d6-review-3",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w3d6-review-4",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w3d6-review-5",
            "title": "Under TOP LEVEL CATEGORY, filter by Geometry",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w3d6-review-6",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w3d6-review-7",
            "title": "Study Group 7 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 7 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-7"
              }
            ]
          },
          {
            "id": "w3d6-review-8",
            "title": "Day 7 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=7"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w3d6-verbal-4",
            "title": "Revise Groups 1-3, Groups 4-6, and Groups 7-9 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              }
            ]
          },
          {
            "id": "w3d6-verbal-5",
            "title": "Day 9 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=9"
              }
            ]
          },
          {
            "id": "w3d6-verbal-6",
            "title": "Study Group 10 Vocabulary Words",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Group 10 Vocabulary Words",
                "url": "https://quizlet.com/in/501909747/set-10-flash-cards/"
              }
            ]
          },
          {
            "id": "w3d6-verbal-7",
            "title": "Complete Big Book Test 8, Section 1 and Section 5 Text Completion Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d6-verbal-8",
            "title": "Section 1: p. 307",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w3d6-verbal-9",
            "title": "Section 5: p. 326",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w3d7",
    "type": "day",
    "week": 3,
    "day": 7,
    "label": "Day 7",
    "title": "Week 3 - Day 7",
    "sections": [
      {
        "category": "Other",
        "icon": "📌",
        "tasks": [
          {
            "id": "w3d7-other-1",
            "title": "Alternatively, you can take the Geometry Foundation Review Quizzes below:",
            "optional": false,
            "type": "quiz",
            "links": []
          },
          {
            "id": "w3d7-other-2",
            "title": "Quiz 1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quiz 1",
                "url": "https://www.gregmat.com/quizzes/quiz/geometry-fundamentals-quiz-1-lpwe"
              }
            ]
          },
          {
            "id": "w3d7-other-3",
            "title": "Quiz 2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quiz 2",
                "url": "https://www.gregmat.com/quizzes/quiz/geometry-fundamentals-quiz-2-tacf"
              }
            ]
          },
          {
            "id": "w3d7-other-4",
            "title": "Video solutions to both can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w4d1",
    "type": "day",
    "week": 4,
    "day": 1,
    "label": "Day 1",
    "title": "Week 4 - Day 1",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w4d1-quant-1",
            "title": "Presenting Data",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Presenting Data",
                "url": "https://www.gregmat.com/class/presenting-data"
              }
            ]
          },
          {
            "id": "w4d1-quant-2",
            "title": "Charts: The Easy Money",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Charts: The Easy Money",
                "url": "https://www.gregmat.com/class/quant-misc-charts-the-easy-money"
              }
            ]
          },
          {
            "id": "w4d1-quant-3",
            "title": "Starting video: Ways to Present Data I",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d1-quant-4",
            "title": "Ending video: Weighted Mean",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w4d1-verbal-1",
            "title": "Text Completion Practice Session I",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Text Completion Practice Session I",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-season-3-session-3"
              }
            ]
          },
          {
            "id": "w4d1-verbal-2",
            "title": "(Optional) Text Completion Practice Session II",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Text Completion Practice Session II",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-season-3-session-6"
              }
            ]
          },
          {
            "id": "w4d1-verbal-3",
            "title": "The two sessions above are for the first TC and SE series. If you're watching one of the 2024 ones, you can skip these. Or watch them. Up to you.",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w4d1-quant-5",
            "title": "Complete Presenting Data Practice",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Presenting Data Practice",
                "url": "https://www.gregmat.com/class/presenting-data-practice"
              }
            ]
          },
          {
            "id": "w4d1-quant-6",
            "title": "Complete Big Book Test 1, Section 3 and Section 7 (CHARTS)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d1-quant-7",
            "title": "Section 3: pp. 45-46",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d1-quant-8",
            "title": "Section 7: pp. 64-65",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w4d1-review-1",
            "title": "Complete Big Book Test 2, Section 2 and Section 5 (CHARTS)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d1-review-2",
            "title": "Section 2: pp. 79-80",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d1-review-3",
            "title": "Section 5: pp. 98-99 (questions 21 - 25)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d1-review-4",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d1-review-5",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w4d1-review-6",
            "title": "Under TAGS, filter by Mean/Median/Range",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w4d1-review-7",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w4d1-review-8",
            "title": "Take the GRE Quant Flashcards Group 6 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 6 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-6-quiz"
              }
            ]
          },
          {
            "id": "w4d1-review-9",
            "title": "Day 7 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=7"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w4d1-verbal-4",
            "title": "Revise Groups 1-3, Groups 4-6, and Groups 7-9 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              }
            ]
          },
          {
            "id": "w4d1-verbal-5",
            "title": "Day 9 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=9"
              }
            ]
          },
          {
            "id": "w4d1-verbal-6",
            "title": "Study Group 10 Vocabulary Words",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Group 10 Vocabulary Words",
                "url": "https://quizlet.com/in/501909747/set-10-flash-cards/"
              }
            ]
          },
          {
            "id": "w4d1-verbal-7",
            "title": "Complete Big Book Test 9, Section 2 and Section 4 Text Completion Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d1-verbal-8",
            "title": "Section 2: p. 352",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d1-verbal-9",
            "title": "Section 4: p. 364",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w4d1-review-10",
            "title": "Take quick Group 10 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Group 10 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/test-your-gre-vocabulary-knowledge-gre-vocabulary-test-part-10"
              }
            ]
          },
          {
            "id": "w4d1-review-11",
            "title": "Take Groups 6-10 Sentence Equivalence Quiz #1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 6-10 Sentence Equivalence Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/sentence-equivalence-quiz-groups-6-10-hgmn"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w4d2",
    "type": "day",
    "week": 4,
    "day": 2,
    "label": "Day 2",
    "title": "Week 4 - Day 2",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w4d2-quant-1",
            "title": "Mean, Median, Mode",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Mean, Median, Mode",
                "url": "https://www.gregmat.com/class/mean-median-mode"
              }
            ]
          },
          {
            "id": "w4d2-quant-2",
            "title": "Standard Deviation & Other Things",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Standard Deviation & Other Things",
                "url": "https://www.gregmat.com/class/standard-deviation-and-other-things"
              }
            ]
          },
          {
            "id": "w4d2-quant-3",
            "title": "Starting video: Weighted Mean Problems",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d2-quant-4",
            "title": "Ending video: Eyeballing Standard Deviation",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w4d2-verbal-1",
            "title": "Text Completion Practice Session III",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Text Completion Practice Session III",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-season-3-session-12"
              }
            ]
          },
          {
            "id": "w4d2-verbal-2",
            "title": "(Optional) Text Completion Practice Session IV",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Text Completion Practice Session IV",
                "url": "https://www.gregmat.com/class/dedicated-tc-and-se-season-3-session-13"
              }
            ]
          },
          {
            "id": "w4d2-verbal-3",
            "title": "The two sessions above are for the first TC and SE series. If you're watching one of the 2024 ones, you can skip these. Or watch them. Up to you.",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w4d2-quant-5",
            "title": "Complete Mean, Median, Mode Practice",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Mean, Median, Mode Practice",
                "url": "https://www.gregmat.com/class/mean-median-mode-practice"
              }
            ]
          },
          {
            "id": "w4d2-quant-6",
            "title": "Complete Standard Deviation & Other Things Practice",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Standard Deviation & Other Things Practice",
                "url": "https://www.gregmat.com/class/standard-deviation-and-other-things-practice"
              }
            ]
          },
          {
            "id": "w4d2-quant-7",
            "title": "(Optional) Complete Manhattan 5-lb chapter on Averages, Weighted Averages, Median, and Mode",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d2-quant-8",
            "title": "3rd Edition: Chapter 21, p. 591",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w4d2-quant-9",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d2-quant-10",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w4d2-quant-11",
            "title": "Under TAGS, filter by Mean/Median/Range, Standard Deviation, and Groupings and Percentiles",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w4d2-quant-12",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w4d2-quant-13",
            "title": "Study Group 8 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 8 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-8"
              }
            ]
          },
          {
            "id": "w4d2-quant-14",
            "title": "Day 8 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=8"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w4d2-verbal-4",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, and Group 10 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Group 10",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_10.PNG"
              }
            ]
          },
          {
            "id": "w4d2-verbal-5",
            "title": "Day 10 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=10"
              }
            ]
          },
          {
            "id": "w4d2-verbal-6",
            "title": "Study Group 11 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 11 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501934215/set-11-flash-cards/"
              }
            ]
          },
          {
            "id": "w4d2-verbal-7",
            "title": "Complete Big Book Test 10, Section 1 and Section 4 Text Completion Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d2-verbal-8",
            "title": "Section 1: p. 384",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d2-verbal-9",
            "title": "Section 4: p. 402",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w4d2-review-1",
            "title": "Take Groups 6-10 Sentence Equivalence Quiz #2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 6-10 Sentence Equivalence Quiz #2",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-sentence-equivalence-quiz-groups-6-10-jwxj"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w4d3",
    "type": "day",
    "week": 4,
    "day": 3,
    "label": "Day 3",
    "title": "Week 4 - Day 3",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w4d3-quant-1",
            "title": "Overlapping Sets & Multiplication Principle",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Overlapping Sets & Multiplication Principle",
                "url": "https://www.gregmat.com/class/overlapping-sets-and-multiplication-principle"
              }
            ]
          },
          {
            "id": "w4d3-quant-2",
            "title": "Permutations/Combinations",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Permutations/Combinations",
                "url": "https://www.gregmat.com/class/permutations-and-combinations"
              }
            ]
          },
          {
            "id": "w4d3-quant-3",
            "title": "Starting video: Calculating SD (simples cases)",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d3-quant-4",
            "title": "Ending video: Inclusion-Exclusion Principle",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d3-quant-5",
            "title": "Complete Overlapping Sets and Permutations & Combinations Practice",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Overlapping Sets and Permutations & Combinations Practice ",
                "url": "https://www.gregmat.com/class/overlapping-sets-and-multiplication-principle-permutations-combinations-practice"
              }
            ]
          },
          {
            "id": "w4d3-quant-6",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d3-quant-7",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w4d3-quant-8",
            "title": "Under TAGS, filter by Sets, Venn Diagrams, and Permutations/Combinations",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w4d3-quant-9",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w4d3-quant-10",
            "title": "Take the GRE Quant Flashcards Groups 1-4 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Groups 1-4 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-groups-1-4-quiz"
              }
            ]
          },
          {
            "id": "w4d3-quant-11",
            "title": "Day 8 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=8"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w4d3-verbal-1",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, and Group 10 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Group 10",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_10.PNG"
              }
            ]
          },
          {
            "id": "w4d3-verbal-2",
            "title": "Day 10 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=10"
              }
            ]
          },
          {
            "id": "w4d3-verbal-3",
            "title": "Study Group 11 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 11 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501934215/set-11-flash-cards/"
              }
            ]
          },
          {
            "id": "w4d3-verbal-4",
            "title": "Take Groups 6-10 Pairing Quiz #1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 6-10 Pairing Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/sentence-equivalence-quiz-groups-6-10-hgmn"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w4d4",
    "type": "day",
    "week": 4,
    "day": 4,
    "label": "Day 4",
    "title": "Week 4 - Day 4",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w4d4-quant-1",
            "title": "Probability Part 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Probability Part 1",
                "url": "https://www.gregmat.com/class/gre-quant-concept-series-probability-chapter-1"
              }
            ]
          },
          {
            "id": "w4d4-quant-2",
            "title": "Probability Part 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Probability Part 2",
                "url": "https://www.gregmat.com/class/gre-quant-concept-series-probability-chapter-2"
              }
            ]
          },
          {
            "id": "w4d4-quant-3",
            "title": "Starting video: Venn Diagram vs Table vs Formula",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d4-quant-4",
            "title": "Ending video: Don't Play the Lottery",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Writing",
        "icon": "✍️",
        "tasks": [
          {
            "id": "w4d4-writing-1",
            "title": "GRE Issue Essay: Live On Air",
            "optional": false,
            "type": "writing",
            "links": [
              {
                "text": "GRE Issue Essay: Live On Air",
                "url": "https://www.gregmat.com/class/writing-misc-issue-essay-live-on-air"
              }
            ]
          },
          {
            "id": "w4d4-writing-2",
            "title": "(2024 Edition) Writing the GRE Issue Essay Step by Step",
            "optional": false,
            "type": "writing",
            "links": [
              {
                "text": "(2024 Edition) Writing the GRE Issue Essay Step by Step",
                "url": "https://youtu.be/KSL3XXrFfH4?si=VKZcOz9HOojniuNZ"
              }
            ]
          },
          {
            "id": "w4d4-writing-3",
            "title": "(Optional) The Claim/Reason Issue Prompt",
            "optional": true,
            "type": "writing",
            "links": [
              {
                "text": "The Claim/Reason Issue Prompt",
                "url": "https://www.gregmat.com/class/writing-misc-the-claimreason-prompt"
              }
            ]
          },
          {
            "id": "w4d4-writing-4",
            "title": "(Optional) Feedback on Issue Essays",
            "optional": true,
            "type": "writing",
            "links": [
              {
                "text": "Feedback on Issue Essays",
                "url": "https://www.gregmat.com/course/gre-essay-feedback-hour"
              }
            ]
          },
          {
            "id": "w4d4-writing-5",
            "title": "Click on any video",
            "optional": false,
            "type": "writing",
            "links": []
          },
          {
            "id": "w4d4-writing-6",
            "title": "Watch feedback on issue essays",
            "optional": false,
            "type": "writing",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w4d4-quant-5",
            "title": "Complete Manhattan 5-lb Chapter on Probability, Combinatorics, and Overlapping Sets",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d4-quant-6",
            "title": "3rd Edition: Chapter 23, p. 637",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w4d4-quant-7",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d4-quant-8",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w4d4-quant-9",
            "title": "Under TAGS, filter by Permutations/Combinations and Probability",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w4d4-quant-10",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w4d4-quant-11",
            "title": "Study Group 9 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 9 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-9"
              }
            ]
          },
          {
            "id": "w4d4-quant-12",
            "title": "Day 9 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=9"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w4d4-verbal-1",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, and Groups 10-11 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-11",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-11.PNG"
              }
            ]
          },
          {
            "id": "w4d4-verbal-2",
            "title": "Day 11 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=11"
              }
            ]
          },
          {
            "id": "w4d4-verbal-3",
            "title": "Take Groups 6-10 Pairing Quiz #2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 6-10 Pairing Quiz #2",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-sentence-equivalence-quiz-groups-6-10-jwxj"
              }
            ]
          },
          {
            "id": "w4d4-verbal-4",
            "title": "Study Group 12 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 12 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501939539/set-12-flash-cards/"
              }
            ]
          }
        ]
      },
      {
        "category": "Writing",
        "icon": "✍️",
        "tasks": [
          {
            "id": "w4d4-writing-7",
            "title": "Visit Random Essay Generator",
            "optional": false,
            "type": "writing",
            "links": [
              {
                "text": "Random Essay Generator",
                "url": "https://www.gregmat.com/write-essay"
              }
            ]
          },
          {
            "id": "w4d4-writing-8",
            "title": "Select random prompt",
            "optional": false,
            "type": "writing",
            "links": []
          },
          {
            "id": "w4d4-writing-9",
            "title": "Write intro and body 1",
            "optional": false,
            "type": "writing",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w4d5",
    "type": "day",
    "week": 4,
    "day": 5,
    "label": "Day 5",
    "title": "Week 4 - Day 5",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w4d5-quant-1",
            "title": "The Normal Distribution",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "The Normal Distribution",
                "url": "https://www.gregmat.com/class/gre-quant-concept-series-the-normal-distribution"
              }
            ]
          },
          {
            "id": "w4d5-quant-2",
            "title": "Starting video: The Combinations Pattern",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d5-quant-3",
            "title": "Ending video: A OR B (Independent)",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d5-quant-4",
            "title": "Complete Normal Distribution Practice",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Normal Distribution Practice",
                "url": "https://www.gregmat.com/class/gre-quant-concept-series-normal-distribution-practice"
              }
            ]
          },
          {
            "id": "w4d5-quant-5",
            "title": "(Optional) Complete Manhattan 5-lb chapters on Standard Deviation and Normal Distribution",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d5-quant-6",
            "title": "3rd Edition: Chapter 22, p. 615",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w4d5-quant-7",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d5-quant-8",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w4d5-quant-9",
            "title": "Under TAGS, filter by Normal Distribution",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w4d5-quant-10",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w4d5-quant-11",
            "title": "Take the GRE Quant Flashcards Group 7 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 7 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-7-quiz"
              }
            ]
          },
          {
            "id": "w4d5-quant-12",
            "title": "Day 9 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=9"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w4d5-verbal-1",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, and Groups 10-11 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-11",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-11.PNG"
              }
            ]
          },
          {
            "id": "w4d5-verbal-2",
            "title": "Day 11 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=11"
              }
            ]
          },
          {
            "id": "w4d5-verbal-3",
            "title": "Study Group 12 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 12 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501939539/set-12-flash-cards/"
              }
            ]
          },
          {
            "id": "w4d5-verbal-4",
            "title": "Take Groups 10-12 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 10-12 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-10-12"
              }
            ]
          },
          {
            "id": "w4d5-verbal-5",
            "title": "(Optional) Take Groups 10-12 Vocabulary Quiz Part 2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Take Groups 10-12 Vocabulary Quiz Part 2",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-january-19-2021"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w4d6",
    "type": "day",
    "week": 4,
    "day": 6,
    "label": "Day 6",
    "title": "Week 4 - Day 6",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w4d6-quant-1",
            "title": "(Optional) Essential Data Analysis Techniques I",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Essential Data Analysis Techniques I",
                "url": "https://www.gregmat.com/class/data-analysis-essential-techniques-march-21-2022"
              }
            ]
          },
          {
            "id": "w4d6-quant-2",
            "title": "(Optional) Essential Data Analysis Techniques II",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Essential Data Analysis Techniques II",
                "url": "https://www.gregmat.com/class/essential-data-analysis-techniques-part-2-march-30-2022"
              }
            ]
          },
          {
            "id": "w4d6-quant-3",
            "title": "Starting video: A OR B (Mutually Exclusive)",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d6-quant-4",
            "title": "Ending video: Normal Distribution Calculations",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d6-quant-5",
            "title": "Complete Data Analysis Mega Practice I",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Data Analysis Mega Practice I",
                "url": "https://www.gregmat.com/class/gre-quant-concept-series-mega-data-analysis-practice-1"
              }
            ]
          },
          {
            "id": "w4d6-quant-6",
            "title": "Complete Data Analysis Mega Practice II",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Data Analysis Mega Practice II",
                "url": "https://www.gregmat.com/class/gre-quant-concept-series-mega-data-analysis-practice-2"
              }
            ]
          },
          {
            "id": "w4d6-quant-7",
            "title": "(PrepSwift Users) Complete the exercises connected to each video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d6-quant-8",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w4d6-quant-9",
            "title": "Under TOP LEVEL CATEGORY, filter by Data Analysis",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w4d6-quant-10",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w4d6-quant-11",
            "title": "Take the GRE Quant Flashcards Groups 5-6 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Groups 5-6 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-groups-5-6-quiz"
              }
            ]
          },
          {
            "id": "w4d6-quant-12",
            "title": "Day 9 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=9"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w4d6-verbal-1",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, and Groups 10-12 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              }
            ]
          },
          {
            "id": "w4d6-verbal-2",
            "title": "Day 12 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=12"
              }
            ]
          },
          {
            "id": "w4d6-verbal-3",
            "title": "Study Group 13 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 13 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501940317/set-13-flash-cards/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w4d7",
    "type": "day",
    "week": 4,
    "day": 7,
    "label": "Day 7",
    "title": "Week 4 - Day 7",
    "sections": [
      {
        "category": "Other",
        "icon": "📌",
        "tasks": [
          {
            "id": "w4d7-other-1",
            "title": "If you need additional Data Analysis instruction...",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w4d7-other-2",
            "title": "Essential Data Analysis Techniques Part III",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Essential Data Analysis Techniques Part III",
                "url": "https://www.gregmat.com/class/gre-essential-data-analysis-techniques-part-3"
              }
            ]
          },
          {
            "id": "w4d7-other-3",
            "title": "Essential Data Analysis Techniques Part IV",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Essential Data Analysis Techniques Part IV",
                "url": "https://www.gregmat.com/class/gre-essential-data-techniques-part-iv"
              }
            ]
          },
          {
            "id": "w4d7-other-4",
            "title": "Also, you can take the Data Analysis Foundation Review Quizzes below:",
            "optional": false,
            "type": "quiz",
            "links": []
          },
          {
            "id": "w4d7-other-5",
            "title": "Quiz 1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quiz 1",
                "url": "https://www.gregmat.com/quizzes/quiz/data-analysis-fundamentals-quiz-1-dmew"
              }
            ]
          },
          {
            "id": "w4d7-other-6",
            "title": "Quiz 2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quiz 2",
                "url": "https://www.gregmat.com/quizzes/quiz/data-analysis-fundamentals-quiz-2-eurt"
              }
            ]
          },
          {
            "id": "w4d7-other-7",
            "title": "Video solutions to both can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w4d7-quant-1",
            "title": "Complete Data Analysis Mega Practice III",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Data Analysis Mega Practice III",
                "url": "https://www.gregmat.com/class/gre-quant-concept-series-mega-practice-iii-charts"
              }
            ]
          },
          {
            "id": "w4d7-quant-2",
            "title": "Complete Big Book Test 3, Section 2 and Section 6 (CHARTS)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d7-quant-3",
            "title": "Section 2: pp. 119-120",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d7-quant-4",
            "title": "Section 6: pp.144-145",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w4d7-review-1",
            "title": "(Optional) Complete Big Book Test 4, Section 2 and Section 5 (CHARTS)",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d7-review-2",
            "title": "Section 2: pp. 159-160",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d7-review-3",
            "title": "Section 5: pp. 178-179",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w4d7-review-4",
            "title": "(Optional) Go to the Greg Mat Quant Problems",
            "optional": true,
            "type": "other",
            "links": [
              {
                "text": "Quant Problems",
                "url": "https://www.gregmat.com/problems/quant"
              }
            ]
          },
          {
            "id": "w4d7-review-5",
            "title": "Under TOP LEVEL CATEGORY, filter by Data Analysis",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w4d7-review-6",
            "title": "Important Note About These Problems",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Important Note About These Problems",
                "url": "https://www.gregmat.com/class/a-note-about-problem-solving-questions"
              }
            ]
          },
          {
            "id": "w4d7-review-7",
            "title": "Study Group 10 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 10 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-10"
              }
            ]
          },
          {
            "id": "w4d7-review-8",
            "title": "Day 10 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=10"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w4d7-verbal-1",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, and Groups 10-12 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              }
            ]
          },
          {
            "id": "w4d7-verbal-2",
            "title": "Day 12 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=12"
              }
            ]
          },
          {
            "id": "w4d7-verbal-3",
            "title": "Study Group 13 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 13 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501940317/set-13-flash-cards/"
              }
            ]
          },
          {
            "id": "w4d7-verbal-4",
            "title": "Take quick Group 13 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Group 13 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/test-your-gre-vocabulary-knowledge-gre-vocabulary-test-part-13"
              }
            ]
          }
        ]
      },
      {
        "category": "Writing",
        "icon": "✍️",
        "tasks": [
          {
            "id": "w4d7-writing-1",
            "title": "Visit Random Essay Generator",
            "optional": false,
            "type": "writing",
            "links": [
              {
                "text": "Random Essay Generator",
                "url": "https://www.gregmat.com/write-essay"
              }
            ]
          },
          {
            "id": "w4d7-writing-2",
            "title": "Select one or two random issue prompts",
            "optional": false,
            "type": "writing",
            "links": []
          },
          {
            "id": "w4d7-writing-3",
            "title": "Write each essay in 30 minutes",
            "optional": false,
            "type": "writing",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w5d1",
    "type": "day",
    "week": 5,
    "day": 1,
    "label": "Day 1",
    "title": "Week 5 - Day 1",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d1-quant-1",
            "title": "Dedicated Quant Strategies Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 1",
                "url": "https://www.gregmat.com/class/dedicated-quant-strategies-session-1"
              }
            ]
          },
          {
            "id": "w5d1-quant-2",
            "title": "Choosing Numbers Strategy",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d1-quant-3",
            "title": "(Optional) Improve Your Skills: Choosing Numbers",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Improve Your Skills: Choosing Numbers",
                "url": "https://www.gregmat.com/class/improve-your-skills-quant-choosing-numbers"
              }
            ]
          },
          {
            "id": "w5d1-quant-4",
            "title": "Starting video: Making Deductions 1",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d1-quant-5",
            "title": "Ending video: Making Deductions 2",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d1-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w5d1-verbal-2",
            "title": "Dedicated Reading Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 1",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-1"
              }
            ]
          },
          {
            "id": "w5d1-verbal-3",
            "title": "(2024 Edition) GRE Reading Strategy Series Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) GRE Reading Strategy Series Session 1",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-1"
              }
            ]
          },
          {
            "id": "w5d1-verbal-4",
            "title": "(2024 Edition with ETS Material) GRE Reading Strategy Series Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "2024 Edition with ETS Material) GRE Reading Strategy Series Session 1",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-reading-strategy-session-1"
              }
            ]
          },
          {
            "id": "w5d1-verbal-5",
            "title": "(Optional) Main Idea in Long Passages",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Main Idea in Long Passages",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-2-session-2"
              }
            ]
          },
          {
            "id": "w5d1-verbal-6",
            "title": "Watch from 21:00 - end",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d1-quant-6",
            "title": "Complete Dedicated Quant Strategies Session 1 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 1 Homework",
                "url": "https://www.gregmat.com/course/quant-strategies"
              }
            ]
          },
          {
            "id": "w5d1-quant-7",
            "title": "Complete Big Book Test 6, Section 3 and Section 4",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d1-quant-8",
            "title": "Prioritize choosing numbers",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d1-quant-9",
            "title": "Section 3: pp. 241-246",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d1-quant-10",
            "title": "Section 4: pp. 247-252",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d1-review-1",
            "title": "Take the GRE Quant Flashcards Group 8 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 8 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-8-quiz"
              }
            ]
          },
          {
            "id": "w5d1-review-2",
            "title": "Day 10 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=10"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d1-verbal-7",
            "title": "Complete Reading homework depending on which series you're following.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d1-verbal-8",
            "title": "Homework is below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d1-verbal-9",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12 and Group 13 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Group 13",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_13.PNG"
              }
            ]
          },
          {
            "id": "w5d1-verbal-10",
            "title": "Day 13 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=13"
              }
            ]
          },
          {
            "id": "w5d1-verbal-11",
            "title": "Study Group 14 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 14 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501941044/set-14-flash-cards/"
              }
            ]
          },
          {
            "id": "w5d1-verbal-12",
            "title": "Complete Big Book Test 1, Section 1 and Section 4 Short and Long Reading Passages",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d1-verbal-13",
            "title": "Prioritize finding main idea",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d1-verbal-14",
            "title": "Section 1: pp. 31-33",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d1-verbal-15",
            "title": "Section 4: pp. 50-52",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w5d2",
    "type": "day",
    "week": 5,
    "day": 2,
    "label": "Day 2",
    "title": "Week 5 - Day 2",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d2-quant-1",
            "title": "Dedicated Quant Strategies Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 2",
                "url": "https://www.gregmat.com/class/dedicated-quant-strategies-session-2"
              }
            ]
          },
          {
            "id": "w5d2-quant-2",
            "title": "Choosing Numbers Continued",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d2-quant-3",
            "title": "Includes Homework Review from Session 1",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d2-quant-4",
            "title": "(Optional) Pick Your Number",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Pick Your Number",
                "url": "https://www.gregmat.com/class/quant-misc-pick-your-number"
              }
            ]
          },
          {
            "id": "w5d2-quant-5",
            "title": "Choosing Numbers Supplement",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d2-quant-6",
            "title": "Video to Watch: Making Deductions 3",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d2-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w5d2-verbal-2",
            "title": "Dedicated Reading Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 2",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-2"
              }
            ]
          },
          {
            "id": "w5d2-verbal-3",
            "title": "(2024 Edition) GRE Reading Strategy Series Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) GRE Reading Strategy Series Session 2",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-2"
              }
            ]
          },
          {
            "id": "w5d2-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Series Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Series Session 2",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-reading-strategy-session-2"
              }
            ]
          },
          {
            "id": "w5d2-verbal-5",
            "title": "(Optional but recomended) Simplifying Sentences Supplement",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Simplifying Sentences Supplement",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-1-session-1"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d2-quant-7",
            "title": "Complete Dedicated Quant Strategies Session 2 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 2 Homework",
                "url": "https://www.gregmat.com/course/quant-strategies"
              }
            ]
          },
          {
            "id": "w5d2-quant-8",
            "title": "Complete Big Book Test 7, Section 3 and Section 4",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d2-quant-9",
            "title": "Prioritize choosing numbers",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d2-quant-10",
            "title": "Section 3: pp. 279-285",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d2-quant-11",
            "title": "Section 4: pp. 286-292",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d2-review-1",
            "title": "Study Group 11 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 11 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-11"
              }
            ]
          },
          {
            "id": "w5d2-review-2",
            "title": "Day 11 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=11"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d2-verbal-6",
            "title": "Complete Reading homework depending on which series you're following.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d2-verbal-7",
            "title": "Homework is below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d2-verbal-8",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12 and Group 13 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Group 13",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_13.PNG"
              }
            ]
          },
          {
            "id": "w5d2-verbal-9",
            "title": "Day 13 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=13"
              }
            ]
          },
          {
            "id": "w5d2-verbal-10",
            "title": "Study Group 14 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 14 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501941044/set-14-flash-cards/"
              }
            ]
          },
          {
            "id": "w5d2-verbal-11",
            "title": "Complete Big Book Test 2, Section 1 and Section 4 Short and Long Reading Passages",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d2-verbal-12",
            "title": "Prioritize simplifying sentences",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d2-verbal-13",
            "title": "Section 1: pp. 71-73",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d2-verbal-14",
            "title": "Section 4: pp. 90-92",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d2-review-3",
            "title": "Take quick Group 14 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Group 14 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/test-your-gre-vocabulary-knowledge-gre-vocabulary-test-part-14"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w5d3",
    "type": "day",
    "week": 5,
    "day": 3,
    "label": "Day 3",
    "title": "Week 5 - Day 3",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d3-quant-1",
            "title": "Dedicated Quant Strategies Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 3",
                "url": "https://www.gregmat.com/class/dedicated-quant-strategies-session-3"
              }
            ]
          },
          {
            "id": "w5d3-quant-2",
            "title": "Backsolving",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d3-quant-3",
            "title": "Includes Homework Review for Session 2",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d3-quant-4",
            "title": "(Optional) Improve Your Skills: Backsolving",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Improve Your Skills: Backsolving",
                "url": "https://www.gregmat.com/class/improve-your-skills-quant-backsolving"
              }
            ]
          },
          {
            "id": "w5d3-quant-5",
            "title": "Starting video: Choosing Numbers",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d3-quant-6",
            "title": "Ending video: Common Numbers to Choose",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d3-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w5d3-verbal-2",
            "title": "Dedicated Reading Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 3",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-3"
              }
            ]
          },
          {
            "id": "w5d3-verbal-3",
            "title": "(2024 Edition) GRE Reading Strategy Series Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) GRE Reading Strategy Series Session 3",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-3"
              }
            ]
          },
          {
            "id": "w5d3-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Series Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Series Session 3",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-reading-strategy-session-3"
              }
            ]
          },
          {
            "id": "w5d3-verbal-5",
            "title": "(Optional) Simplifying Sentences Supplement",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Simplifying Sentences Supplement",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-2-session-1"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d3-quant-7",
            "title": "Complete Dedicated Quant Strategies Session 3 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 3 Homework",
                "url": "https://www.gregmat.com/course/quant-strategies"
              }
            ]
          },
          {
            "id": "w5d3-quant-8",
            "title": "Homework is below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d3-quant-9",
            "title": "Complete Big Book Test 8, Section 2 and Section 6",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d3-quant-10",
            "title": "Prioritize backsolving",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d3-quant-11",
            "title": "Section 2: pp. 313-319",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d3-quant-12",
            "title": "Section 6: pp. 332-337",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d3-review-1",
            "title": "Take the GRE Quant Flashcards Groups 7-8 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Groups 7-8 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-groups-7-8-quiz"
              }
            ]
          },
          {
            "id": "w5d3-review-2",
            "title": "Day 11 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=11"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d3-verbal-6",
            "title": "Complete Reading homework depending on which series you're following.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d3-verbal-7",
            "title": "Homework is below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d3-verbal-8",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12 and Groups 13-14 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-14",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-14.PNG"
              }
            ]
          },
          {
            "id": "w5d3-verbal-9",
            "title": "Day 14 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=14"
              }
            ]
          },
          {
            "id": "w5d3-verbal-10",
            "title": "Study Group 15 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 15 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501941689/set-15-flash-cards/"
              }
            ]
          },
          {
            "id": "w5d3-verbal-11",
            "title": "Complete Big Book Test 3, Section 3 and Section 5 Short and Long Reading Passages",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d3-verbal-12",
            "title": "Prioritize simplifying sentences and finding main idea",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d3-verbal-13",
            "title": "Section 3: pp. 124-126",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d3-verbal-14",
            "title": "Section 5: pp. 136-138",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w5d4",
    "type": "day",
    "week": 5,
    "day": 4,
    "label": "Day 4",
    "title": "Week 5 - Day 4",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d4-quant-1",
            "title": "Dedicated Quant Strategies Session 4",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 4",
                "url": "https://www.gregmat.com/class/dedicated-quant-strategies-session-4"
              }
            ]
          },
          {
            "id": "w5d4-quant-2",
            "title": "Backsolving continued",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d4-quant-3",
            "title": "Includes Homework Review for Session 3",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d4-quant-4",
            "title": "Video to Watch: When to Stop Choosing?",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d4-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow? ",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w5d4-verbal-2",
            "title": "Dedicated Reading Session 4",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 4",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-4"
              }
            ]
          },
          {
            "id": "w5d4-verbal-3",
            "title": "(2024 Edition) GRE Reading Strategy Series Session 4",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) GRE Reading Strategy Series Session 4",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-4"
              }
            ]
          },
          {
            "id": "w5d4-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Series Session 4",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Series Session 4",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-reading-strategy-session-4"
              }
            ]
          },
          {
            "id": "w5d4-verbal-5",
            "title": "(Optional but recommended) Simplifying on Steroids",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Simplifying on Steroids",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-1-session-2"
              }
            ]
          },
          {
            "id": "w5d4-verbal-6",
            "title": "Sentence Function Supplement",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d4-verbal-7",
            "title": "(Optional) Simplifying and Function Combined",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Simplifying and Function Combined",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-2-session-6"
              }
            ]
          },
          {
            "id": "w5d4-verbal-8",
            "title": "Two strategies at once",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d4-verbal-9",
            "title": "Double trouble baby!!",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d4-quant-5",
            "title": "Complete Big Book Test 9, Section 3 and Section 5",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d4-quant-6",
            "title": "Prioritize choosing numbers and backsolving",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d4-quant-7",
            "title": "Section 3: pp. 358-363",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d4-quant-8",
            "title": "Section 5: pp. 370-375",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d4-review-1",
            "title": "Study Group 12 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 12 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-12"
              }
            ]
          },
          {
            "id": "w5d4-review-2",
            "title": "Day 12 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=12"
              }
            ]
          },
          {
            "id": "w5d4-review-3",
            "title": "Complete Official Guide Discrete Questions: Easy",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d4-review-4",
            "title": "2nd Edition: pp. 145-149",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d4-review-5",
            "title": "3rd Edition: pp. 155-159",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d4-verbal-10",
            "title": "Complete Reading homework depending on which series you're following.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d4-verbal-11",
            "title": "Homework is below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d4-verbal-12",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12 and Groups 13-14 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-14",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-14.PNG"
              }
            ]
          },
          {
            "id": "w5d4-verbal-13",
            "title": "Day 14 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=14"
              }
            ]
          },
          {
            "id": "w5d4-verbal-14",
            "title": "Study Group 15 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 15 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501941689/set-15-flash-cards/"
              }
            ]
          },
          {
            "id": "w5d4-verbal-15",
            "title": "Complete Big Book Test 4, Section 1 and Section 4 Short and Long Reading Passages",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d4-verbal-16",
            "title": "Prioritize identifying sentence function",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d4-verbal-17",
            "title": "Section 1: pp. 151-153",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d4-verbal-18",
            "title": "Section 4: pp. 170-172",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d4-review-6",
            "title": "Take Groups 13-15 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 13-15 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-13-15"
              }
            ]
          },
          {
            "id": "w5d4-review-7",
            "title": "Take Groups 11-15 Pairing Quiz #1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 11-15 Pairing Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/sentence-equivalence-quiz-groups-11-15-hgfh"
              }
            ]
          },
          {
            "id": "w5d4-review-8",
            "title": "(Optional) Take Groups 13-15 Vocabulary Quiz Part 2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Take Groups 13-15 Vocabulary Quiz Part 2",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-january-27-2021"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w5d5",
    "type": "day",
    "week": 5,
    "day": 5,
    "label": "Day 5",
    "title": "Week 5 - Day 5",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d5-quant-1",
            "title": "Dedicated Quant Strategies Session 5",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 5",
                "url": "https://www.gregmat.com/class/dedicated-quant-strategies-session-5"
              }
            ]
          },
          {
            "id": "w5d5-quant-2",
            "title": "“No Math Needed”",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d5-quant-3",
            "title": "Video to Watch: Backsolving",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d5-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d5-verbal-2",
            "title": "Dedicated Reading Session 5",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 5",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-5"
              }
            ]
          },
          {
            "id": "w5d5-verbal-3",
            "title": "(2024 Edition) GRE Reading Strategy Series Session 5",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) GRE Reading Strategy Series Session 5",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-5"
              }
            ]
          },
          {
            "id": "w5d5-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Series Session 5",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Series Session 5",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-reading-strategy-session-5-rc1o"
              }
            ]
          },
          {
            "id": "w5d5-verbal-5",
            "title": "(Optional) Classic Greg Mat Video on “Some Words Are More Important”",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Classic Greg Mat Video on “Some Words Are More Important”",
                "url": "https://vimeo.com/973562607/8b7a5bd4d7"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d5-quant-4",
            "title": "Complete Dedicated Quant Strategies Session 5 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 5 Homework",
                "url": "https://www.gregmat.com/course/quant-strategies"
              }
            ]
          },
          {
            "id": "w5d5-quant-5",
            "title": "Complete Big Book Test 10, Section 3 and Section 7",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d5-quant-6",
            "title": "Can any questions be solved with No Math Needed?",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d5-quant-7",
            "title": "Section 3: pp. 396-401",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d5-quant-8",
            "title": "Section 7: pp. 414-420",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d5-review-1",
            "title": "Complete Official Guide Discrete Questions: Medium",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d5-review-2",
            "title": "2nd Edition: pp. 150-154",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d5-review-3",
            "title": "3rd Edition: pp. 160-164",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d5-review-4",
            "title": "Take the GRE Quant Flashcards Group 9 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 9 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-9-quiz"
              }
            ]
          },
          {
            "id": "w5d5-review-5",
            "title": "Day 12 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=12"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d5-verbal-6",
            "title": "Complete reading homework depending on the series you're following.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d5-verbal-7",
            "title": "Homework is under the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d5-verbal-8",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12 and Groups 13-15 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              }
            ]
          },
          {
            "id": "w5d5-verbal-9",
            "title": "Day 15 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=15"
              }
            ]
          },
          {
            "id": "w5d5-verbal-10",
            "title": "Study Group 16 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 16 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501942311/set-16-flash-cards/"
              }
            ]
          },
          {
            "id": "w5d5-verbal-11",
            "title": "Take Groups 1-15 Pairing Quiz #1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 1-15 Pairing Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-sentence-equivalence-quiz-groups-1-15-1-rlkj"
              }
            ]
          },
          {
            "id": "w5d5-verbal-12",
            "title": "Complete Big Book Test 5, Section 2 and Section 4 Short and Long Reading Passages",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d5-verbal-13",
            "title": "Prioritize identifying the most important words",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d5-verbal-14",
            "title": "Section 2: pp. 197-199",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d5-verbal-15",
            "title": "Section 4: pp. 210-212",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d5-review-6",
            "title": "Complete Official Guide Text Completion Easy Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d5-review-7",
            "title": "2nd Edition: pp. 54-55",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d5-review-8",
            "title": "3rd Edition: pp. 54-55",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w5d6",
    "type": "day",
    "week": 5,
    "day": 6,
    "label": "Day 6",
    "title": "Week 5 - Day 6",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d6-quant-1",
            "title": "Dedicated Quant Strategies Session 6",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 6",
                "url": "https://www.gregmat.com/class/dedicated-quant-strategies-session-6"
              }
            ]
          },
          {
            "id": "w5d6-quant-2",
            "title": "“Simplify”",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d6-quant-3",
            "title": "Includes Homework Review for Session 5",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d6-quant-4",
            "title": "“Simplify” Supplement",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "“Simplify” Supplement",
                "url": "https://www.gregmat.com/class/tips-tricks-and-shortcuts-session-6"
              }
            ]
          },
          {
            "id": "w5d6-quant-5",
            "title": "Watch from 45:00 - end",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d6-quant-6",
            "title": "Video to Watch: Piece by Piece",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d6-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow? ",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w5d6-verbal-2",
            "title": "Dedicated Reading Session 6",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 6",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-6"
              }
            ]
          },
          {
            "id": "w5d6-verbal-3",
            "title": "(2024 Edition) GRE Reading Strategy Series Session 6",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) GRE Reading Strategy Series Session 6",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-6"
              }
            ]
          },
          {
            "id": "w5d6-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Series Session 6",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Series Session 6",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-strategy-session-6"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d6-quant-7",
            "title": "Complete Dedicated Quant Strategies Session 6 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 6 Homework",
                "url": "https://www.gregmat.com/course/quant-strategies"
              }
            ]
          },
          {
            "id": "w5d6-quant-8",
            "title": "Complete Big Book Test 11, Section 1 and Section 5",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d6-quant-9",
            "title": "Prioritize simplifying",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d6-quant-10",
            "title": "Section 1: pp. 423-427",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d6-quant-11",
            "title": "Section 5: pp. 446-451",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d6-review-1",
            "title": "Complete Official Guide Discrete Questions: Hard",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d6-review-2",
            "title": "2nd Edition: pp. 155-160",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d6-review-3",
            "title": "3rd Edition: pp. 165-170",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d6-review-4",
            "title": "Take the GRE Quant Flashcards Group 10 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 10 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-10-quiz"
              }
            ]
          },
          {
            "id": "w5d6-review-5",
            "title": "Day 12 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=12"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d6-verbal-5",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12 and Groups 13-15 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              }
            ]
          },
          {
            "id": "w5d6-verbal-6",
            "title": "Day 15 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=15"
              }
            ]
          },
          {
            "id": "w5d6-verbal-7",
            "title": "Study Group 16 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 16 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501942311/set-16-flash-cards/"
              }
            ]
          },
          {
            "id": "w5d6-verbal-8",
            "title": "Take Groups 1-15 Pairing Quiz #2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 1-15 Pairing Quiz #2",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-sentence-equivalence-quiz-groups-1-15-2"
              }
            ]
          },
          {
            "id": "w5d6-verbal-9",
            "title": "Complete Big Book Test 6, Section 1 and Section 2 Short and Long Reading Passages",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d6-verbal-10",
            "title": "Prioritize identifying function and the most important words",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d6-verbal-11",
            "title": "Section 1: pp. 231-233",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d6-verbal-12",
            "title": "Section 2: pp. 237-239",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d6-verbal-13",
            "title": "Complete Official Guide Text Completion Medium Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d6-verbal-14",
            "title": "2nd Edition: pp. 60-61",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d6-verbal-15",
            "title": "3rd Edition: pp. 60-61",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d6-verbal-16",
            "title": "Take quick Group 16 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Group 16 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/test-your-gre-vocabulary-knowledge-gre-vocabulary-test-part-16"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w5d7",
    "type": "day",
    "week": 5,
    "day": 7,
    "label": "Day 7",
    "title": "Week 5 - Day 7",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d7-quant-1",
            "title": "Dedicated Quant Strategies Session 7",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 7",
                "url": "https://www.gregmat.com/class/dedicated-quant-strategies-session-7"
              }
            ]
          },
          {
            "id": "w5d7-quant-2",
            "title": "Break the Rules",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d7-quant-3",
            "title": "Includes Homework Review for Session 6",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d7-quant-4",
            "title": "Video to Watch: Simplifying QC Answer Choices",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d7-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w5d7-verbal-2",
            "title": "Dedicated Reading Session 7",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 7",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-7"
              }
            ]
          },
          {
            "id": "w5d7-verbal-3",
            "title": "Rephrasing Questions Supplement",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Rephrasing Questions Supplement",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-1-session-7"
              }
            ]
          },
          {
            "id": "w5d7-verbal-4",
            "title": "(2024 Edition) GRE Reading Strategy Series Session 7",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) GRE Reading Strategy Series Session 7",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-7"
              }
            ]
          },
          {
            "id": "w5d7-verbal-5",
            "title": "(2024 Edition with ETS Material) Reading Strategy Series Session 7",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Series Session 7",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-strategy-session-7"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w5d7-quant-5",
            "title": "Complete Dedicated Quant Strategies Session 7 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 7 Homework",
                "url": "https://www.gregmat.com/course/quant-strategies"
              }
            ]
          },
          {
            "id": "w5d7-quant-6",
            "title": "Complete Big Book Test 12, Section 1 and Section 4",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d7-quant-7",
            "title": "Try to apply all previously learned strategies",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d7-quant-8",
            "title": "Section 1: pp. 460-466",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d7-quant-9",
            "title": "Section 4: pp. 478-484",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d7-review-1",
            "title": "Day 12 of the Quant Mountain (no quiz/flashcard today)",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=12"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w5d7-verbal-6",
            "title": "Complete reading homework depending on the series you're following.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d7-verbal-7",
            "title": "Homework is below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w5d7-verbal-8",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, and Group 16 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Group 16",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_16.PNG"
              }
            ]
          },
          {
            "id": "w5d7-verbal-9",
            "title": "Day 16 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=16"
              }
            ]
          },
          {
            "id": "w5d7-verbal-10",
            "title": "Study Group 17 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 17 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501970435/set-17-flash-cards/"
              }
            ]
          },
          {
            "id": "w5d7-verbal-11",
            "title": "Complete Big Book Test 7, Section 1 and Section 2 Short and Long Reading Passages",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d7-verbal-12",
            "title": "Prioritize rephrasing questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d7-verbal-13",
            "title": "Section 1: pp. 269-271",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d7-verbal-14",
            "title": "Section 2: pp. 275-277",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w5d7-review-2",
            "title": "Complete Official Guide Text Completion Hard Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w5d7-review-3",
            "title": "2nd Edition: pp. 68-69",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w5d7-review-4",
            "title": "3rd Edition: pp. 68-69",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w6d1",
    "type": "day",
    "week": 6,
    "day": 1,
    "label": "Day 1",
    "title": "Week 6 - Day 1",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d1-quant-1",
            "title": "Dedicated Quant Strategies Session 8",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Strategies Session 8",
                "url": "https://www.gregmat.com/class/dedicated-quant-strategies-session-8"
              }
            ]
          },
          {
            "id": "w6d1-quant-2",
            "title": "Find the Shortcut",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d1-quant-3",
            "title": "Includes Homework Review for Session 7",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d1-quant-4",
            "title": "Shortcut! Part 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Shortcut! Part 1",
                "url": "https://www.gregmat.com/class/quant-misc-shortcut-i"
              }
            ]
          },
          {
            "id": "w6d1-quant-5",
            "title": "Supplement",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d1-quant-6",
            "title": "(Optional) Shortcut! Part 2",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Shortcut! Part 2",
                "url": "https://www.gregmat.com/class/quant-misc-shortcut-ii"
              }
            ]
          },
          {
            "id": "w6d1-quant-7",
            "title": "Supplement",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d1-quant-8",
            "title": "Video to Watch: Manipulating QC Answer Choices",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d1-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow? ",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w6d1-verbal-2",
            "title": "Dedicated Reading Session 8",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 8",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-8"
              }
            ]
          },
          {
            "id": "w6d1-verbal-3",
            "title": "(2024 Edition) Reading Strategy Series Session 8",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) Reading Strategy Series Session 8",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-8"
              }
            ]
          },
          {
            "id": "w6d1-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Series Session 8",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Series Session 8",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-strategy-session-8"
              }
            ]
          },
          {
            "id": "w6d1-verbal-5",
            "title": "Practice Session",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Practice Session",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-strategy-session-8B"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d1-quant-9",
            "title": "Complete Problems We Didn’t Get To In Class",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Problems We Didn’t Get To In Class",
                "url": "https://www.gregmat.com/course/quant-strategies"
              }
            ]
          },
          {
            "id": "w6d1-quant-10",
            "title": "Complete Big Book Test 13, Section 2 and Section 5",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d1-quant-11",
            "title": "Prioritize finding shortcuts",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d1-quant-12",
            "title": "Section 2: pp. 505-510",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d1-quant-13",
            "title": "Section 5: pp. 522-527",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w6d1-review-1",
            "title": "Complete Official Guide Data Interpretation Sets",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d1-review-2",
            "title": "2nd Edition: pp. 161-163",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d1-review-3",
            "title": "3rd Edition: pp. 171-173",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d1-review-4",
            "title": "Study Group 13 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 13 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-13"
              }
            ]
          },
          {
            "id": "w6d1-review-5",
            "title": "Day 13 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=13"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d1-verbal-6",
            "title": "Complete reading homework depending on the series you're following.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d1-verbal-7",
            "title": "If there is any, it should be below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d1-verbal-8",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, and Group 16 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Group 16",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_16.PNG"
              }
            ]
          },
          {
            "id": "w6d1-verbal-9",
            "title": "Day 16 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=16"
              }
            ]
          },
          {
            "id": "w6d1-verbal-10",
            "title": "Study Group 17 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 17 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/501970435/set-17-flash-cards/"
              }
            ]
          },
          {
            "id": "w6d1-verbal-11",
            "title": "Complete Big Book Test 8, Section 1 and Section 5 Short and Long Reading Passages",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d1-verbal-12",
            "title": "Prioritize scanning",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d1-verbal-13",
            "title": "Section 1: pp. 309-311",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d1-verbal-14",
            "title": "Section 5: pp. 328-330",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w6d1-review-6",
            "title": "Complete Verbal Reasoning Practice Book Text Completion Questions: Easy",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d1-review-7",
            "title": "1st Edition: pp. 58-60",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d1-review-8",
            "title": "2nd Edition: 58-60",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d1-review-9",
            "title": "Take quick Group 17 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Group 17 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/test-your-gre-vocabulary-knowledge-gre-vocabulary-test-part-17"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w6d2",
    "type": "day",
    "week": 6,
    "day": 2,
    "label": "Day 2",
    "title": "Week 6 - Day 2",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d2-quant-1",
            "title": "Includes Homework Review for Session 1",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d2-quant-2",
            "title": "Video to Watch: Simplify and Manipulate",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d2-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w6d2-verbal-2",
            "title": "Dedicated Reading Session 9",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 9",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-9"
              }
            ]
          },
          {
            "id": "w6d2-verbal-3",
            "title": "(2024 Edition) Reading Strategy Series Session 9",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) Reading Strategy Series Session 9",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-9"
              }
            ]
          },
          {
            "id": "w6d2-verbal-4",
            "title": "(2024 Edition) Reading Strategy Series Session 9",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) Reading Strategy Series Session 9",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-strategy-session-9-ablj"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d2-quant-3",
            "title": "Complete any Homework for Tips, Tricks, and Shortcuts for Sessions 1 and 2",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Homework for Tips, Tricks, and Shortcuts for Sessions 1 and 2",
                "url": "https://www.gregmat.com/course/quant-tips-tricks-shortcuts"
              }
            ]
          },
          {
            "id": "w6d2-quant-4",
            "title": "Complete Quantitative Reasoning Book Practice: Arithmetic",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d2-quant-5",
            "title": "1st Edition: pp. 43-50",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d2-quant-6",
            "title": "2nd Edition: pp. 43-50",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d2-quant-7",
            "title": "(Optional) Take All Quant Concepts (Level 1 - Easy) Quiz #1",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "All Quant Concepts (Level 1 - Easy) Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/math-fundamentalsbasics-quiz-level-1"
              }
            ]
          },
          {
            "id": "w6d2-quant-8",
            "title": "Video with solutions can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          },
          {
            "id": "w6d2-quant-9",
            "title": "Take the GRE Quant Flashcards Group 11 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 11 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-11-quiz"
              }
            ]
          },
          {
            "id": "w6d2-quant-10",
            "title": "Day 13 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=13"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d2-verbal-5",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, and Groups 16-17 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-17",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-17.PNG"
              }
            ]
          },
          {
            "id": "w6d2-verbal-6",
            "title": "Day 17 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=17"
              }
            ]
          },
          {
            "id": "w6d2-verbal-7",
            "title": "Study Group 18 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 18 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502138353/set-18-flash-cards/"
              }
            ]
          },
          {
            "id": "w6d2-verbal-8",
            "title": "Complete Big Book Test 9, Section 2 and Section 4 Short and Long Reading Passages",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d2-verbal-9",
            "title": "Prioritize rephrasing questions and scanning",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d2-verbal-10",
            "title": "Section 2: pp. 354-356",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d2-verbal-11",
            "title": "Section 4: pp. 366-368",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w6d2-review-1",
            "title": "Complete Verbal Reasoning Practice Book Text Completion Questions: Medium",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d2-review-2",
            "title": "1st Edition: pp. 61-62",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d2-review-3",
            "title": "2nd Edition: pp. 61-62",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w6d3",
    "type": "day",
    "week": 6,
    "day": 3,
    "label": "Day 3",
    "title": "Week 6 - Day 3",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d3-quant-1",
            "title": "Includes Homework Review for Session 2",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d3-quant-2",
            "title": "Includes Homework Review for Session 3",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d3-quant-3",
            "title": "(Optional) Sequences Part I",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Sequences Part I",
                "url": "https://www.gregmat.com/class/quant-misc-sequences"
              }
            ]
          },
          {
            "id": "w6d3-quant-4",
            "title": "(Optional) Sequences Part II",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Sequences Part II",
                "url": "https://www.gregmat.com/class/quant-misc-sequences-ii"
              }
            ]
          },
          {
            "id": "w6d3-quant-5",
            "title": "These videos might've been previously watched from another part of the 2-month plan",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d3-quant-6",
            "title": "Video to Watch: Equal / Not Equal",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d3-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w6d3-verbal-2",
            "title": "Dedicated Reading Session 10",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 10",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-10"
              }
            ]
          },
          {
            "id": "w6d3-verbal-3",
            "title": "(2024 Edition) Reading Strategy Series Session 10",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) Reading Strategy Series Session 10",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-10"
              }
            ]
          },
          {
            "id": "w6d3-verbal-4",
            "title": "(2024 Edition) Reading Strategy Series Session 10",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) Reading Strategy Series Session 10",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-strategy-session-10"
              }
            ]
          },
          {
            "id": "w6d3-verbal-5",
            "title": "(Optional but recommended) Supplement Eliminating Answers",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Supplement Eliminating Answers",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-2-session-11"
              }
            ]
          },
          {
            "id": "w6d3-verbal-6",
            "title": "Watch from 27:50 - end",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d3-quant-7",
            "title": "Complete Homework for Tips, Tricks, and Shortcuts for Session 3",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Homework for Tips, Tricks, and Shortcuts for Session 3",
                "url": "https://www.gregmat.com/course/quant-tips-tricks-shortcuts"
              }
            ]
          },
          {
            "id": "w6d3-quant-8",
            "title": "Complete Quantitative Reasoning Book Practice: Algebra",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d3-quant-9",
            "title": "1st Edition: pp. 65-72",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d3-quant-10",
            "title": "2nd Edition: pp. 65-72",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d3-quant-11",
            "title": "(Optional) Take All Quant Concepts (Level 1 - Easy) Quiz #2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "All Quant Concepts (Level 1 - Easy) Quiz #2",
                "url": "https://www.gregmat.com/quizzes/quiz/math-fundamentalsbasics-quiz-2-level-1"
              }
            ]
          },
          {
            "id": "w6d3-quant-12",
            "title": "Video with solutions can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          },
          {
            "id": "w6d3-quant-13",
            "title": "Study Group 14 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 14 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-14"
              }
            ]
          },
          {
            "id": "w6d3-quant-14",
            "title": "Day 14 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=14"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d3-verbal-7",
            "title": "Complete reading homework depending on what series you're following.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d3-verbal-8",
            "title": "If there is any, it should be below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d3-verbal-9",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, and Groups 16-17 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-17",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-17.PNG"
              }
            ]
          },
          {
            "id": "w6d3-verbal-10",
            "title": "Day 17 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=17"
              }
            ]
          },
          {
            "id": "w6d3-verbal-11",
            "title": "Study Group 18 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 18 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502138353/set-18-flash-cards/"
              }
            ]
          },
          {
            "id": "w6d3-verbal-12",
            "title": "Complete Big Book Test 10, Section 1 and Section 4 Short and Long Reading Passages",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d3-verbal-13",
            "title": "Prioritize eliminating answers",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d3-verbal-14",
            "title": "Section 1: pp. 386-388",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d3-verbal-15",
            "title": "Section 4: pp. 404-406",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w6d3-review-1",
            "title": "Complete Groups 16-18 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 16-18 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-16-18"
              }
            ]
          },
          {
            "id": "w6d3-review-2",
            "title": "(Optional) Complete Groups 16-18 Vocabulary Quiz Part 2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Complete Groups 16-18 Vocabulary Quiz Part 2",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-february-3-2021"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w6d4",
    "type": "day",
    "week": 6,
    "day": 4,
    "label": "Day 4",
    "title": "Week 6 - Day 4",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d4-quant-1",
            "title": "Includes Homework Review for Session 5",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d4-quant-2",
            "title": "(Optional) Algebra & Arithmetic Practice Session",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Algebra & Arithmetic Practice Session",
                "url": "https://www.gregmat.com/class/quant-misc-algebra-and-arithmetic"
              }
            ]
          },
          {
            "id": "w6d4-quant-3",
            "title": "Starting video: Pattern Recognition I",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d4-quant-4",
            "title": "Ending video: Pattern Recognition II",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d4-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "http://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w6d4-verbal-2",
            "title": "Dedicated Reading Session 11",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 11",
                "url": "https://www.gregmat.com/class/dedicated-reading-season-3-session-11"
              }
            ]
          },
          {
            "id": "w6d4-verbal-3",
            "title": "(2024 Edition) Reading Strategy Series Session 11",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) Reading Strategy Series Session 11",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-11"
              }
            ]
          },
          {
            "id": "w6d4-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Series Session 11",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Series Session 11",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-strategy-session-11"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d4-quant-5",
            "title": "Complete any Homework for Tips, Tricks, and Shortcuts for Sessions 5 and 6",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Homework for Tips, Tricks, and Shortcuts for Sessions 5 and 6",
                "url": "https://www.gregmat.com/course/quant-tips-tricks-shortcuts"
              }
            ]
          },
          {
            "id": "w6d4-quant-6",
            "title": "Complete Quantitative Reasoning Book Practice: Geometry",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d4-quant-7",
            "title": "1st Edition: pp. 85-92",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d4-quant-8",
            "title": "2nd Edition: pp. 85-92",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d4-quant-9",
            "title": "(Optional) Take All Quant Concepts (Level 2 - Medium) Quiz #1",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "All Quant Concepts (Level 2 - Medium) Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/math-fundamentalsbasics-quiz-level-2"
              }
            ]
          },
          {
            "id": "w6d4-quant-10",
            "title": "Video with solutions can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          },
          {
            "id": "w6d4-quant-11",
            "title": "Take the GRE Quant Flashcards Group 12 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 12 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-12-quiz"
              }
            ]
          },
          {
            "id": "w6d4-quant-12",
            "title": "Day 14 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=14"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d4-verbal-5",
            "title": "Complete reading homework depending on the series you're following.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d4-verbal-6",
            "title": "If there is any, it should be below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d4-verbal-7",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, and Groups 16-18 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              }
            ]
          },
          {
            "id": "w6d4-verbal-8",
            "title": "Day 18 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=18"
              }
            ]
          },
          {
            "id": "w6d4-verbal-9",
            "title": "Study Group 19 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 19 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502377802/set-19-flash-cards/"
              }
            ]
          },
          {
            "id": "w6d4-verbal-10",
            "title": "Complete Big Book Test 11 Relevant Verbal Sections",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d4-verbal-11",
            "title": "Section 3: pp. 434; 436-438",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d4-verbal-12",
            "title": "Section 6: pp. 452; 454-456",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w6d4-review-1",
            "title": "Complete Verbal Reasoning Practice Book Text Completion Questions: Hard",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d4-review-2",
            "title": "1st Edition: pp. 63-64",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d4-review-3",
            "title": "2nd Edition: pp. 63-64",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w6d5",
    "type": "day",
    "week": 6,
    "day": 5,
    "label": "Day 5",
    "title": "Week 6 - Day 5",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d5-quant-1",
            "title": "Includes Homework Review for Session 6",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d5-quant-2",
            "title": "Includes Homework Review for Session 7",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d5-quant-3",
            "title": "Video to Watch: Brute Force",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d5-verbal-1",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w6d5-verbal-2",
            "title": "Dedicated Reading Session 12",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Reading Session 12",
                "url": "https://www.gregmat.com/class/dedicated-gre-reading-season-3-session-12"
              }
            ]
          },
          {
            "id": "w6d5-verbal-3",
            "title": "(2024 Edition) Reading Strategy Series Session 12",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) Reading Strategy Series Session 12",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-session-12"
              }
            ]
          },
          {
            "id": "w6d5-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Series Session 12",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Series Session 12",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-strategy-session-12"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d5-quant-4",
            "title": "Complete any Homework for Tips, Tricks, and Shortcuts for Sessions 7 and 8",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Homework for Tips, Tricks, and Shortcuts for Sessions 7 and 8",
                "url": "https://www.gregmat.com/course/quant-tips-tricks-shortcuts"
              }
            ]
          },
          {
            "id": "w6d5-quant-5",
            "title": "Complete Quantitative Reasoning Book Practice: Data Analysis",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d5-quant-6",
            "title": "1st Edition: pp. 105-117",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d5-quant-7",
            "title": "2nd Edition: pp. 105-117",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d5-quant-8",
            "title": "(Optional) Take All Quant Concepts (Level 2 - Medium) Quiz #2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "All Quant Concepts (Level 2 - Medium) Quiz #2",
                "url": "https://www.gregmat.com/quizzes/quiz/math-fundamentalsbasics-quiz-2-level-2"
              }
            ]
          },
          {
            "id": "w6d5-quant-9",
            "title": "Video with solutions can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          },
          {
            "id": "w6d5-quant-10",
            "title": "Take the GRE Quant Flashcards Group 13 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 13 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-13-quiz"
              }
            ]
          },
          {
            "id": "w6d5-quant-11",
            "title": "Day 14 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=14"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d5-verbal-5",
            "title": "Complete reading homework depending on which series you're following.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d5-verbal-6",
            "title": "If there is any, it should be below the video.",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d5-verbal-7",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, and Groups 16-18 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              }
            ]
          },
          {
            "id": "w6d5-verbal-8",
            "title": "Day 18 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=18"
              }
            ]
          },
          {
            "id": "w6d5-verbal-9",
            "title": "Study Group 19 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 19 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502377802/set-19-flash-cards/"
              }
            ]
          },
          {
            "id": "w6d5-verbal-10",
            "title": "Complete Big Book Test 12 Relevant Verbal Sections",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d5-verbal-11",
            "title": "Section 3: pp. 472; 474-476",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d5-verbal-12",
            "title": "Section 6: pp. 491; 493-495",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w6d5-review-1",
            "title": "Take quick Group 19 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Group 19 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/test-your-gre-vocabulary-knowledge-gre-vocabulary-test-part-19"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w6d6",
    "type": "day",
    "week": 6,
    "day": 6,
    "label": "Day 6",
    "title": "Week 6 - Day 6",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d6-quant-1",
            "title": "Includes Homework Review for Session 8",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d6-quant-2",
            "title": "Includes Homework Review for Session 9",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d6-quant-3",
            "title": "Video to Watch: Calculating Extremes I",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d6-verbal-1",
            "title": "Dedicated Critical Reasoning Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Critical Reasoning Session 1",
                "url": "https://www.gregmat.com/class/dedicated-critical-reasoning-session-1"
              }
            ]
          },
          {
            "id": "w6d6-verbal-2",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w6d6-verbal-3",
            "title": "(2024 Edition) GRE Reading Strategy Practice Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) GRE Reading Strategy Practice Session 1",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-practice-session-1"
              }
            ]
          },
          {
            "id": "w6d6-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Practice Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Practice Session 1",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-practice-session-1"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d6-quant-4",
            "title": "Complete any Homework for Tips, Tricks, and Shortcuts Sessions 9 and 10",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Homework for Tips, Tricks, and Shortcuts Sessions 9 and 10",
                "url": "https://www.gregmat.com/course/quant-tips-tricks-shortcuts"
              }
            ]
          },
          {
            "id": "w6d6-quant-5",
            "title": "Complete Manhattan 5-lb Math Diagnostic Test",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d6-quant-6",
            "title": "3rd Edition: Chapter 2, p. 17",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d6-quant-7",
            "title": "Just treat it as extra practice, not as a “diagnostic”",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d6-quant-8",
            "title": "(Optional) Take All Quant Concepts (Level 3 - Hard) Quiz #1",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "All Quant Concepts (Level 3 - Hard) Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/math-fundamentalsbasics-quiz-level-3"
              }
            ]
          },
          {
            "id": "w6d6-quant-9",
            "title": "Video with solutions can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          },
          {
            "id": "w6d6-quant-10",
            "title": "Study Group 15 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 15 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-15"
              }
            ]
          },
          {
            "id": "w6d6-quant-11",
            "title": "Day 15 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=15"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d6-verbal-5",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Group 19 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Group 19",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_19.PNG"
              }
            ]
          },
          {
            "id": "w6d6-verbal-6",
            "title": "Day 19 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=19"
              }
            ]
          },
          {
            "id": "w6d6-verbal-7",
            "title": "Study Group 20 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 20 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502406186/set-20-flash-cards/"
              }
            ]
          },
          {
            "id": "w6d6-verbal-8",
            "title": "Take Groups 16-20 Pairing Quiz #1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 16-20 Pairing Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/sentence-equivalence-quiz-groups-16-20-xdnz"
              }
            ]
          },
          {
            "id": "w6d6-verbal-9",
            "title": "Complete Big Book Test 1 Relevant Critical Reasoning Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d6-verbal-10",
            "title": "Section 2, #8-10: p. 36",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d6-verbal-11",
            "title": "Section 2, #23-25: pp. 39-40",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d6-verbal-12",
            "title": "Section 6, #5-7: p. 55",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d6-verbal-13",
            "title": "Section 6, #23-25: p. 59",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w6d6-review-1",
            "title": "Complete Official Guide Reading Questions: Easy",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d6-review-2",
            "title": "2nd Edition: pp. 56-59",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d6-review-3",
            "title": "3rd Edition: pp. 56-59",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w6d7",
    "type": "day",
    "week": 6,
    "day": 7,
    "label": "Day 7",
    "title": "Week 6 - Day 7",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d7-quant-1",
            "title": "Includes Homework Review for Session 10",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d7-quant-2",
            "title": "Includes Homework Review for Session 11",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w6d7-quant-3",
            "title": "Video to Watch: Calculating Extremes II",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d7-verbal-1",
            "title": "Dedicated Critical Reasoning Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Critical Reasoning Session 2",
                "url": "https://www.gregmat.com/class/dedicated-critical-reasoning-session-2"
              }
            ]
          },
          {
            "id": "w6d7-verbal-2",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "http://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w6d7-verbal-3",
            "title": "(2024 Edition) GRE Reading Strategy Practice Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) GRE Reading Strategy Practice Session 2",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-practice-session-2"
              }
            ]
          },
          {
            "id": "w6d7-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Practice Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Practice Session 2",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-practice-session-2"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w6d7-quant-4",
            "title": "Complete Tips, Tricks, and Shortcuts Session 11 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Tips, Tricks, and Shortcuts Session 11 Homework",
                "url": "https://www.gregmat.com/class/tips-tricks-and-shortcuts-session-11"
              }
            ]
          },
          {
            "id": "w6d7-quant-5",
            "title": "Complete Quantitative Reasoning Practice Book: Mixed Practice Set 1",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d7-quant-6",
            "title": "1st Edition: pp. 141-150",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d7-quant-7",
            "title": "2nd Edition: pp. 141-150",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d7-quant-8",
            "title": "Do under timed conditions",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d7-quant-9",
            "title": "(Optional) Take All Quant Concepts (Level 3 - Hard) Quiz #2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "All Quant Concepts (Level 3 - Hard) Quiz #2",
                "url": "https://www.gregmat.com/quizzes/quiz/math-fundamentalsbasics-quiz-2-level-3"
              }
            ]
          },
          {
            "id": "w6d7-quant-10",
            "title": "Video with solutions can be found here",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/gre-fundamentalsbasics-quizzes"
              }
            ]
          },
          {
            "id": "w6d7-quant-11",
            "title": "Take the GRE Quant Flashcards Groups 9-12 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Groups 9-12 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-groups-9-12-quiz"
              }
            ]
          },
          {
            "id": "w6d7-quant-12",
            "title": "Day 15 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=15"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w6d7-verbal-5",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Group 19 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Group 19",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_19.PNG"
              }
            ]
          },
          {
            "id": "w6d7-verbal-6",
            "title": "Day 19 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=19"
              }
            ]
          },
          {
            "id": "w6d7-verbal-7",
            "title": "Study Group 20 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 20 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502406186/set-20-flash-cards/"
              }
            ]
          },
          {
            "id": "w6d7-verbal-8",
            "title": "Take Groups 16-20 Pairing Quiz #2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 16-20 Pairing Quiz #2",
                "url": "https://www.gregmat.com/quizzes/quiz/sentence-equivalence-quiz-groups-16-20-2-uthf"
              }
            ]
          },
          {
            "id": "w6d7-verbal-9",
            "title": "Complete Big Book Test 2 Relevant Critical Reasoning Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d7-verbal-10",
            "title": "Section 3, #7-9: p. 83",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d7-verbal-11",
            "title": "Section 3, #23-25: p. 87",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d7-verbal-12",
            "title": "Section 6, #5-7: p. 102",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d7-verbal-13",
            "title": "Section 6, #23-25: p. 106",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w6d7-review-1",
            "title": "Complete Official Guide Reading Questions: Medium",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w6d7-review-2",
            "title": "2nd Edition: pp. 63-67",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w6d7-review-3",
            "title": "3rd Edition: pp. 63-67",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w7d1",
    "type": "day",
    "week": 7,
    "day": 1,
    "label": "Day 1",
    "title": "Week 7 - Day 1",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d1-quant-1",
            "title": "Dedicated Quant Toolkit Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 1",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-1"
              }
            ]
          },
          {
            "id": "w7d1-quant-2",
            "title": "Plugging Holes",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d1-quant-3",
            "title": "(Optional) Plugging Quant Holes I",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Plugging Quant Holes I",
                "url": "https://www.gregmat.com/class/improve-your-skills-quant-plugging-the-quant-holes"
              }
            ]
          },
          {
            "id": "w7d1-quant-4",
            "title": "(Optional) Plugging Quant Holes II",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Plugging Quant Holes II",
                "url": "https://www.gregmat.com/class/improve-your-skills-quant-plugging-the-quant-holes-ii"
              }
            ]
          },
          {
            "id": "w7d1-quant-5",
            "title": "Video to Watch: Have a System",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d1-verbal-1",
            "title": "Dedicated Critical Reasoning Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Critical Reasoning Session 3",
                "url": "https://www.gregmat.com/class/dedicated-critical-reasoning-session-3"
              }
            ]
          },
          {
            "id": "w7d1-verbal-2",
            "title": "Which series should I follow?",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Which series should I follow?",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/files/Which_series_should_I_follow_-_2_month.png"
              }
            ]
          },
          {
            "id": "w7d1-verbal-3",
            "title": "(2024 Edition) GRE Reading Strategy Practice Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition) GRE Reading Strategy Practice Session 3",
                "url": "https://www.gregmat.com/class/2024-edition-gre-reading-strategy-series-practice-session-3"
              }
            ]
          },
          {
            "id": "w7d1-verbal-4",
            "title": "(2024 Edition with ETS Material) Reading Strategy Practice Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "(2024 Edition with ETS Material) Reading Strategy Practice Session 3",
                "url": "https://www.gregmat.com/class/2024-edition-with-ets-material-gre-reading-practice-session-3"
              }
            ]
          },
          {
            "id": "w7d1-verbal-5",
            "title": "In the Official Guide GRE book, Practice Test 1, complete the following under timed conditions:",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w7d1-verbal-6",
            "title": "Issue Essay: p. 305",
            "optional": false,
            "type": "writing",
            "links": []
          },
          {
            "id": "w7d1-verbal-7",
            "title": "2nd Edition: p. 305",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d1-verbal-8",
            "title": "3rd Edition: p. 329",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d1-verbal-9",
            "title": "Write the intro and body 1",
            "optional": false,
            "type": "writing",
            "links": []
          },
          {
            "id": "w7d1-verbal-10",
            "title": "2nd Edition: pp. 309-317",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d1-verbal-11",
            "title": "3rd Edition: pp. 333-341",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d1-quant-6",
            "title": "2nd Edition: pp. 329-336",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d1-quant-7",
            "title": "3rd Edition: pp. 353-360",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w7d1-review-1",
            "title": "Make sure to identify as specifically as possible what mistakes were made.",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d1-quant-8",
            "title": "Complete Dedicated Quant Toolkit Session 1 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 1 Homework",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-1"
              }
            ]
          },
          {
            "id": "w7d1-quant-9",
            "title": "(Optional) Complete 10 Medium Quant Questions Quiz #1",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "10 Medium Quant Questions Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/10-medium-quant-questions-march-2-2023"
              }
            ]
          },
          {
            "id": "w7d1-quant-10",
            "title": "Answers can be found here",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/quant-quizzes-by-difficulty"
              }
            ]
          },
          {
            "id": "w7d1-quant-11",
            "title": "Study Group 16 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 16 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-16"
              }
            ]
          },
          {
            "id": "w7d1-quant-12",
            "title": "Day 16 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=16"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d1-verbal-12",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-20 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-20",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-20.PNG"
              }
            ]
          },
          {
            "id": "w7d1-verbal-13",
            "title": "Day 20 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=20"
              }
            ]
          },
          {
            "id": "w7d1-verbal-14",
            "title": "Study Group 21 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 21 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502407751/set-21-flash-cards/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w7d2",
    "type": "day",
    "week": 7,
    "day": 2,
    "label": "Day 2",
    "title": "Week 7 - Day 2",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d2-quant-1",
            "title": "(Optional) Dedicated Quant Toolkit Session 2",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 2",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-2"
              }
            ]
          },
          {
            "id": "w7d2-quant-2",
            "title": "You can skip this if you’d like as it covers a familiar topic: Choosing Numbers",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d2-quant-3",
            "title": "But you should still do the homework",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d2-quant-4",
            "title": "Dedicated Quant Toolkit Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 3",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-3"
              }
            ]
          },
          {
            "id": "w7d2-quant-5",
            "title": "Manipulating QC Answer Choices",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d2-quant-6",
            "title": "Includes Homework Review for Session 2",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d2-quant-7",
            "title": "Video to Watch: Create Easier Example",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d2-verbal-1",
            "title": "Dedicated Critical Reasoning Session 4",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Critical Reasoning Session 4",
                "url": "https://www.gregmat.com/class/dedicated-critical-reasoning-session-4"
              }
            ]
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d2-quant-8",
            "title": "Complete Dedicated Quant Toolkit Session 2 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 2 Homework",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-2"
              }
            ]
          },
          {
            "id": "w7d2-quant-9",
            "title": "Complete Big Book Test 14, Section 2",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d2-quant-10",
            "title": "pp. 542-548",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d2-quant-11",
            "title": "Untimed",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d2-quant-12",
            "title": "Complete Big Book Test 14, Section 5",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d2-quant-13",
            "title": "pp. 561-566",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d2-quant-14",
            "title": "Timed - 25 minutes",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d2-quant-15",
            "title": "(Optional) Complete 10 Medium Quant Questions Quiz #2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "10 Medium Quant Questions Quiz #2",
                "url": "https://www.gregmat.com/quizzes/quiz/10-medium-quant-questions-march-7-2023"
              }
            ]
          },
          {
            "id": "w7d2-quant-16",
            "title": "Answers can be found here",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/quant-quizzes-by-difficulty"
              }
            ]
          },
          {
            "id": "w7d2-quant-17",
            "title": "Take the GRE Quant Flashcards Group 14 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 14 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-14-quiz"
              }
            ]
          },
          {
            "id": "w7d2-quant-18",
            "title": "Day 16 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=16"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d2-verbal-2",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-20 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-20",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-20.PNG"
              }
            ]
          },
          {
            "id": "w7d2-verbal-3",
            "title": "Day 20 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=20"
              }
            ]
          },
          {
            "id": "w7d2-verbal-4",
            "title": "Study Group 21 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 21 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502407751/set-21-flash-cards/"
              }
            ]
          },
          {
            "id": "w7d2-verbal-5",
            "title": "Complete Official Guide Reading Questions: Hard",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d2-verbal-6",
            "title": "2nd Edition: pp. 71-74",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d2-verbal-7",
            "title": "3rd Edition: pp. 71-74",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d2-verbal-8",
            "title": "Complete Groups 19-21 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 19-21 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-19-21"
              }
            ]
          },
          {
            "id": "w7d2-verbal-9",
            "title": "(Optional) Complete Groups 19-21 Vocabulary Quiz Part 2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Complete Groups 19-21 Vocabulary Quiz Part 2",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-february-10-2021"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w7d3",
    "type": "day",
    "week": 7,
    "day": 3,
    "label": "Day 3",
    "title": "Week 7 - Day 3",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d3-quant-1",
            "title": "(Optional) Dedicated Quant Toolkit Session 4",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 4",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-4"
              }
            ]
          },
          {
            "id": "w7d3-quant-2",
            "title": "You can skip this if you’d like as it covers a familiar topic: Backsolving",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d3-quant-3",
            "title": "But you should still do the homework",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d3-quant-4",
            "title": "Dedicated Quant Toolkit Session 5",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 5",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-5"
              }
            ]
          },
          {
            "id": "w7d3-quant-5",
            "title": "Find a Pattern",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d3-quant-6",
            "title": "Video to Watch: Plug and Chug",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d3-verbal-1",
            "title": "Dedicated Critical Reasoning Session 5",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Critical Reasoning Session 5",
                "url": "https://www.gregmat.com/class/dedicated-critical-reasoning-session-5"
              }
            ]
          },
          {
            "id": "w7d3-verbal-2",
            "title": "Critical Reasoning Wrap-up",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d3-quant-7",
            "title": "Complete Dedicated Quant Toolkit Session 4 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 4 Homework",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-4"
              }
            ]
          },
          {
            "id": "w7d3-quant-8",
            "title": "Complete Quantitative Reasoning Practice Book: Mixed Practice Set 2",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d3-quant-9",
            "title": "1st Edition: pp. 173-182",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d3-quant-10",
            "title": "2nd Edition: pp. 173-182",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d3-quant-11",
            "title": "Do under timed conditions",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d3-quant-12",
            "title": "(Optional) Complete 10 Medium Quant Questions Quiz #3",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "10 Medium Quant Questions Quiz #3",
                "url": "https://www.gregmat.com/quizzes/quiz/10-medium-quant-questions-march-13-2023"
              }
            ]
          },
          {
            "id": "w7d3-quant-13",
            "title": "Answers can be found here",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "here",
                "url": "https://www.gregmat.com/course/quant-quizzes-by-difficulty"
              }
            ]
          },
          {
            "id": "w7d3-quant-14",
            "title": "Take the GRE Quant Flashcards Group 15 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 15 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-15-quiz"
              }
            ]
          },
          {
            "id": "w7d3-quant-15",
            "title": "Day 16 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=16"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d3-verbal-3",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              }
            ]
          },
          {
            "id": "w7d3-verbal-4",
            "title": "Day 21 of Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=21"
              }
            ]
          },
          {
            "id": "w7d3-verbal-5",
            "title": "Study Group 22 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 22 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502576410/set-22-flash-cards/"
              }
            ]
          },
          {
            "id": "w7d3-verbal-6",
            "title": "Complete Big Book Test 3 Relevant Critical Reasoning Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d3-verbal-7",
            "title": "Section 1, #7-9: p. 110",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d3-verbal-8",
            "title": "Section 1, #23-25: p. 114",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d3-verbal-9",
            "title": "Section 4, #8-10: p. 129",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d3-verbal-10",
            "title": "Section 4, #23-25: p. 133",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d3-verbal-11",
            "title": "Complete Official Guide Sentence Equivalence Questions: Easy, Medium, Hard",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d3-verbal-12",
            "title": "2nd Edition: pp. 55, 62, 70",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d3-verbal-13",
            "title": "3rd Edition: please find it and tell us",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w7d4",
    "type": "day",
    "week": 7,
    "day": 4,
    "label": "Day 4",
    "title": "Week 7 - Day 4",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d4-quant-1",
            "title": "Dedicated Quant Toolkit Session 6",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 6",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-6"
              }
            ]
          },
          {
            "id": "w7d4-quant-2",
            "title": "Applying the Tools",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d4-quant-3",
            "title": "Video to Watch: The Three Skipping Periods",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d4-verbal-1",
            "title": "Critical Reasoning: The Small Reading Passages",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Critical Reasoning: The Small Reading Passages",
                "url": "https://www.gregmat.com/class/verbal-misc-critical-reasoning"
              }
            ]
          },
          {
            "id": "w7d4-verbal-2",
            "title": "Critical Reasoning: The Small Reading Passages Part 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Critical Reasoning: The Small Reading Passages Part 2",
                "url": "https://www.gregmat.com/class/verbal-misc-critical-thinking"
              }
            ]
          },
          {
            "id": "w7d4-verbal-3",
            "title": "Going through practice problems together",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d4-quant-4",
            "title": "Complete Big Book Test 15, Section 3",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-quant-5",
            "title": "pp. 586-591",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d4-quant-6",
            "title": "Untimed",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d4-quant-7",
            "title": "Complete Big Book Test 15, Section 6",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-quant-8",
            "title": "pp. 603-609",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d4-quant-9",
            "title": "Timed - 25 minutes",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w7d4-review-1",
            "title": "Harder Questions",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Harder Questions",
                "url": "https://www.gregmat.com/class/test-15-harder-quant-walkthrough"
              }
            ]
          },
          {
            "id": "w7d4-review-2",
            "title": "Charts",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "Charts",
                "url": "https://www.gregmat.com/class/test-15-charts-walkthrough"
              }
            ]
          },
          {
            "id": "w7d4-review-3",
            "title": "Day 16 of the Quant Mountain (no flashcards or quizzes today)",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=16"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d4-verbal-4",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              }
            ]
          },
          {
            "id": "w7d4-verbal-5",
            "title": "Day 21 of Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=21"
              }
            ]
          },
          {
            "id": "w7d4-verbal-6",
            "title": "Study Group 22 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 22 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502576410/set-22-flash-cards/"
              }
            ]
          },
          {
            "id": "w7d4-verbal-7",
            "title": "Complete Big Book Test 4 Relevant Critical Reasoning Questions",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-verbal-8",
            "title": "Section 3, #4-6: p. 163",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-verbal-9",
            "title": "Section 3, #23-25: p. 167",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-verbal-10",
            "title": "Section 6, #6-8: p. 182",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-verbal-11",
            "title": "Section 6, #23-25: pp. 185-186",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-verbal-12",
            "title": "(Optional) Complete Big Book Test 5 Relevant Critical Reasoning Questions",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-verbal-13",
            "title": "Section 1, #4-6: pp. 189-190",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-verbal-14",
            "title": "Section 1, #23-25: pp. 193-194",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-verbal-15",
            "title": "Section 5, #8-10: p. 215",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-verbal-16",
            "title": "Section 5, #23-25: p. 219",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d4-verbal-17",
            "title": "Take quick Group 22 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Group 22 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/test-your-gre-vocabulary-knowledge-gre-vocabulary-test-part-22"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w7d5",
    "type": "day",
    "week": 7,
    "day": 5,
    "label": "Day 5",
    "title": "Week 7 - Day 5",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d5-quant-1",
            "title": "Dedicated Quant Toolkit Session 7",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 7",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-7"
              }
            ]
          },
          {
            "id": "w7d5-quant-2",
            "title": "Let’s Get to Work Part I",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d5-quant-3",
            "title": "Video to Watch: MUST Problems",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d5-verbal-1",
            "title": "Dedicated Verbal Toolkit Session 1",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Verbal Toolkit Session 1",
                "url": "https://www.gregmat.com/class/dedicated-verbal-toolkit-session-1"
              }
            ]
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w7d5-review-1",
            "title": "“Math” Strategy",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d5-review-2",
            "title": "Pairing Strategy",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d5-quant-4",
            "title": "Complete Big Book Test 16, Section 2",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d5-quant-5",
            "title": "pp. 618-625",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d5-quant-6",
            "title": "Untimed",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d5-quant-7",
            "title": "Complete Big Book Test 16, Section 5",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d5-quant-8",
            "title": "pp. 638-643",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d5-quant-9",
            "title": "Timed - 25 minutes",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w7d5-review-3",
            "title": "Study Group 17 Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 17 Flash Cards",
                "url": "https://www.gregmat.com/course/quant-flashcards-group-17"
              }
            ]
          },
          {
            "id": "w7d5-review-4",
            "title": "Day 17 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=17"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d5-verbal-2",
            "title": "Complete Dedicated Verbal Toolkit Session 1 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Verbal Toolkit Session 1 Homework",
                "url": "https://www.gregmat.com/course/verbal-toolkit"
              }
            ]
          },
          {
            "id": "w7d5-verbal-3",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21, and Group 22 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              },
              {
                "text": "Group 22",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_22.PNG"
              }
            ]
          },
          {
            "id": "w7d5-verbal-4",
            "title": "Day 22 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=22"
              }
            ]
          },
          {
            "id": "w7d5-verbal-5",
            "title": "Study Group 23 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 23 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502590562/set-23-flash-cards/"
              }
            ]
          },
          {
            "id": "w7d5-verbal-6",
            "title": "Complete Verbal Reasoning Practice Book: Sentence Equivalence Questions Easy, Medium, and Hard",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d5-verbal-7",
            "title": "1st Edition: pp. 80-86",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d5-verbal-8",
            "title": "2nd Edition: pp. 80-86",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w7d6",
    "type": "day",
    "week": 7,
    "day": 6,
    "label": "Day 6",
    "title": "Week 7 - Day 6",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d6-quant-1",
            "title": "Dedicated Quant Toolkit Session 8",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Quant Toolkit Session 8",
                "url": "https://www.gregmat.com/class/dedicated-quant-toolkit-session-8"
              }
            ]
          },
          {
            "id": "w7d6-quant-2",
            "title": "Let’s Get To Work Part 2",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d6-quant-3",
            "title": "Starting video: CANNOT Problems",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d6-quant-4",
            "title": "Ending video: CAN / COULD Problems",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d6-verbal-1",
            "title": "Dedicated Verbal Toolkit Session 2",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Verbal Toolkit Session 2",
                "url": "https://www.gregmat.com/class/dedicated-verbal-toolkit-session-2"
              }
            ]
          },
          {
            "id": "w7d6-verbal-2",
            "title": "Simplifying Sentences",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d6-verbal-3",
            "title": "Includes Homework Review for Session 1",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d6-verbal-4",
            "title": "Dedicated Verbal Toolkit Session 3",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Verbal Toolkit Session 3",
                "url": "https://www.gregmat.com/class/dedicated-verbal-toolkit-session-3"
              }
            ]
          },
          {
            "id": "w7d6-verbal-5",
            "title": "Sentence Function",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d6-quant-5",
            "title": "Complete Quantitative Reasoning Practice Book: Mixed Practice Set 3",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d6-quant-6",
            "title": "1st Edition: pp. 199-208",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d6-quant-7",
            "title": "2nd Edition: pp. 199-208",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d6-quant-8",
            "title": "Do under timed conditions",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d6-quant-9",
            "title": "Take the GRE Quant Flashcards Group 16 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 16 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-16-quiz-477y"
              }
            ]
          },
          {
            "id": "w7d6-quant-10",
            "title": "Day 17 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=17"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d6-verbal-6",
            "title": "Complete Dedicated Verbal Toolkit Sessions 2 and 3 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Verbal Toolkit Sessions 2 and 3 Homework",
                "url": "https://www.gregmat.com/course/verbal-toolkit"
              }
            ]
          },
          {
            "id": "w7d6-verbal-7",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21, and Group 22 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              },
              {
                "text": "Group 22",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_22.PNG"
              }
            ]
          },
          {
            "id": "w7d6-verbal-8",
            "title": "Day 22 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=22"
              }
            ]
          },
          {
            "id": "w7d6-verbal-9",
            "title": "Study Group 23 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 23 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502590562/set-23-flash-cards/"
              }
            ]
          },
          {
            "id": "w7d6-verbal-10",
            "title": "Complete Verbal Reasoning Practice Book: Reading Questions Easy and Medium",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d6-verbal-11",
            "title": "1st Edition: pp. 18-27",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d6-verbal-12",
            "title": "2nd Edition: pp. 18-27",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w7d7",
    "type": "day",
    "week": 7,
    "day": 7,
    "label": "Day 7",
    "title": "Week 7 - Day 7",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d7-quant-1",
            "title": "A Class that Tests Your Skills",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d7-quant-2",
            "title": "Video to Watch: Sufficient Information Problems",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d7-verbal-1",
            "title": "Dedicated Verbal Toolkit Session 4",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Verbal Toolkit Session 4",
                "url": "https://www.gregmat.com/class/dedicated-verbal-toolkit-session-4"
              }
            ]
          },
          {
            "id": "w7d7-verbal-2",
            "title": "Homework Review",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w7d7-verbal-3",
            "title": "Dedicated Verbal Toolkit Session 5",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Verbal Toolkit Session 5",
                "url": "https://www.gregmat.com/class/dedicated-verbal-toolkit-session-5"
              }
            ]
          },
          {
            "id": "w7d7-verbal-4",
            "title": "Using Three Tools: Three-Cog Process",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w7d7-quant-3",
            "title": "Complete Manhattan 5-lb Math Mixed Mini Sets",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d7-quant-4",
            "title": "3rd Edition: Chapter 33, p. 949",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d7-quant-5",
            "title": "(Optional — for the diehards) Complete Manhattan 5-lb chapter on Advanced Quant",
            "optional": true,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d7-quant-6",
            "title": "3rd Edition: Chapter 30, p. 789",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d7-quant-7",
            "title": "Take the GRE Quant Flashcards Group 17 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Group 17 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-group-17-quiz"
              }
            ]
          },
          {
            "id": "w7d7-quant-8",
            "title": "Day 17 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=17"
              }
            ]
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w7d7-verbal-5",
            "title": "Complete Dedicated Verbal Toolkit Session 5 Homework",
            "optional": false,
            "type": "practice",
            "links": [
              {
                "text": "Dedicated Verbal Toolkit Session 5 Homework",
                "url": "https://www.gregmat.com/class/dedicated-verbal-toolkit-session-5"
              }
            ]
          },
          {
            "id": "w7d7-verbal-6",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21, and Groups 22-23 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              },
              {
                "text": "Groups 22-23",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_22-23.PNG"
              }
            ]
          },
          {
            "id": "w7d7-verbal-7",
            "title": "Day 23 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=23"
              }
            ]
          },
          {
            "id": "w7d7-verbal-8",
            "title": "Study Group 24 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 24 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502611623/set-24-flash-cards/"
              }
            ]
          },
          {
            "id": "w7d7-verbal-9",
            "title": "Complete Verbal Reasoning Practice Book: Reading Questions Hard",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d7-verbal-10",
            "title": "1st Edition: pp. 28-32",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d7-verbal-11",
            "title": "2nd Edition: pp. 28-32",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w7d7-verbal-12",
            "title": "Complete Big Book Test 13 Relevant Verbal Sections",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d7-verbal-13",
            "title": "Section 1: pp. 499; 501-503",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w7d7-verbal-14",
            "title": "Section 4: pp. 516; 518-520",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w8d1",
    "type": "day",
    "week": 8,
    "day": 1,
    "label": "Day 1",
    "title": "Week 8 - Day 1",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d1-quant-1",
            "title": "A Class That Tests Your Skills",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d1-verbal-1",
            "title": "Dedicated Verbal Toolkit Session 6",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Dedicated Verbal Toolkit Session 6",
                "url": "https://www.gregmat.com/class/dedicated-verbal-toolkit-session-6"
              }
            ]
          },
          {
            "id": "w8d1-verbal-2",
            "title": "Prediction",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w8d1-verbal-3",
            "title": "Includes Homework Review for Session 5",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w8d1-verbal-4",
            "title": "10 Verbal Skills in One Hour",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "10 Verbal Skills in One Hour",
                "url": "https://www.gregmat.com/class/10-verbal-skills-in-1-hour"
              }
            ]
          },
          {
            "id": "w8d1-verbal-5",
            "title": "In the Official Guide GRE book, Practice Test 1, complete the following under timed conditions:",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w8d1-verbal-6",
            "title": "2nd Edition: pp. 318-328",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d1-verbal-7",
            "title": "3rd Edition: pp. 342-352",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d1-quant-2",
            "title": "2nd Edition: pp. 338-344",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d1-quant-3",
            "title": "3rd Edition: pp. 361-368",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d1-quant-4",
            "title": "Take the GRE Quant Flashcards Groups 13-17 Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "GRE Quant Flashcards Groups 13-17 Quiz",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-quant-flashcards-groups-13-17-quiz"
              }
            ]
          },
          {
            "id": "w8d1-quant-5",
            "title": "Day 17 of the Quant Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Quant Mountain",
                "url": "https://www.gregmat.com/mountains/quant-mountain?day=17"
              }
            ]
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w8d1-review-1",
            "title": "Make sure to identify as specifically as possible what mistakes were made.",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d1-verbal-8",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21, and Groups 22-23 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              },
              {
                "text": "Groups 22-23",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_22-23.PNG"
              }
            ]
          },
          {
            "id": "w8d1-verbal-9",
            "title": "Day 23 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=23"
              }
            ]
          },
          {
            "id": "w8d1-verbal-10",
            "title": "Study Group 24 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 24 Vocabulary Flash Cards",
                "url": "https://quizlet.com/1023404065/set-24-flash-cards/?i=6hhuyn&x=1jqt"
              }
            ]
          },
          {
            "id": "w8d1-verbal-11",
            "title": "Complete Groups 22-24 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 22-24 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-22-24"
              }
            ]
          },
          {
            "id": "w8d1-verbal-12",
            "title": "(Optional) Complete Groups 22-24 Vocabulary Quiz Part 2",
            "optional": true,
            "type": "quiz",
            "links": [
              {
                "text": "Complete Groups 22-24 Vocabulary Quiz Part 2",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-february-17-2021"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w8d2",
    "type": "day",
    "week": 8,
    "day": 2,
    "label": "Day 2",
    "title": "Week 8 - Day 2",
    "sections": [
      {
        "category": "General Advice",
        "icon": "💡",
        "tasks": [
          {
            "id": "w8d2-general-advice-1",
            "title": "The Week Before the GRE",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "The Week Before the GRE",
                "url": "https://www.gregmat.com/class/4-what-to-do-a-week-before-your-gre-test"
              }
            ]
          },
          {
            "id": "w8d2-general-advice-2",
            "title": "Advice and What To Do",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d2-quant-1",
            "title": "Complete Manhattan 5-lb Book Math Practice Section 1 (Easy), Math Practice Session 2 (Medium), and Math Practice Session 3 (Hard)",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d2-quant-2",
            "title": "3rd Edition: Chapter 33, p. 976",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d2-quant-3",
            "title": "3rd Edition: Chapter 33, p. 988",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d2-quant-4",
            "title": "3rd Edition: Chapter 33, p. 1001",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d2-verbal-1",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21, and Groups 22-24 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              },
              {
                "text": "Groups 22-24",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_22-24.PNG"
              }
            ]
          },
          {
            "id": "w8d2-verbal-2",
            "title": "Day 24 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=24"
              }
            ]
          },
          {
            "id": "w8d2-verbal-3",
            "title": "Study Group 25 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 25 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502687514/set-25-flash-cards/"
              }
            ]
          },
          {
            "id": "w8d2-verbal-4",
            "title": "Complete Verbal Reasoning Practice Book: Mixed Practice Set 1",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d2-verbal-5",
            "title": "1st Edition: pp. 102-110",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d2-verbal-6",
            "title": "2nd Edition: pp. 102-110",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d2-verbal-7",
            "title": "Do under timed conditions",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d2-verbal-8",
            "title": "Carefully scrutinize incorrect answers",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d2-verbal-9",
            "title": "Identify specifically what mistakes were made",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w8d3",
    "type": "day",
    "week": 8,
    "day": 3,
    "label": "Day 3",
    "title": "Week 8 - Day 3",
    "sections": [
      {
        "category": "Time Management",
        "icon": "⏱️",
        "tasks": [
          {
            "id": "w8d3-time-management-1",
            "title": "In the Official Guide GRE book, Practice Test 2, complete the following under timed conditions:",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w8d3-time-management-2",
            "title": "Issue Essay",
            "optional": false,
            "type": "writing",
            "links": []
          },
          {
            "id": "w8d3-time-management-3",
            "title": "2nd Edition: p. 433",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d3-time-management-4",
            "title": "3rd Edition: p. 457",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d3-time-management-5",
            "title": "Write the essay",
            "optional": false,
            "type": "writing",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d3-verbal-1",
            "title": "2nd Edition: pp. 437-445",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d3-verbal-2",
            "title": "3rd Edition: pp. 461-469",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d3-quant-1",
            "title": "2nd Edition: pp. 456-463",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d3-quant-2",
            "title": "3rd Edition: pp. 480-487",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w8d3-review-1",
            "title": "Make sure to identify as specifically as possible what mistakes were made.",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d3-verbal-3",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21, and Groups 22-24 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              },
              {
                "text": "Groups 22-24",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_22-24.PNG"
              }
            ]
          },
          {
            "id": "w8d3-verbal-4",
            "title": "Day 25 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=25"
              }
            ]
          },
          {
            "id": "w8d3-verbal-5",
            "title": "Study Group 25 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 25 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502687514/set-25-flash-cards/"
              }
            ]
          },
          {
            "id": "w8d3-verbal-6",
            "title": "Take Groups 21-25 Pairing Quiz #1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 21-25 Pairing Quiz #1",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-sentence-equivalence-quiz-groups-21-25-tryu"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w8d4",
    "type": "day",
    "week": 8,
    "day": 4,
    "label": "Day 4",
    "title": "Week 8 - Day 4",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d4-quant-1",
            "title": "(Optional) Quant Skills Checklist 3",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Quant Skills Checklist 3",
                "url": "https://www.gregmat.com/class/improve-your-skills-quant-quant-skills-checklist-3"
              }
            ]
          },
          {
            "id": "w8d4-quant-2",
            "title": "Test Your Skills",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d4-verbal-1",
            "title": "(Optional) Verbal Skills Checklist 1",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Verbal Skills Checklist 1",
                "url": "https://www.gregmat.com/class/improve-your-skills-verbal-verbal-skills-checklist-1"
              }
            ]
          },
          {
            "id": "w8d4-verbal-2",
            "title": "Test Your Skills",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Time Management",
        "icon": "⏱️",
        "tasks": [
          {
            "id": "w8d4-time-management-1",
            "title": "Write down your time management strategy on paper",
            "optional": false,
            "type": "writing",
            "links": []
          },
          {
            "id": "w8d4-time-management-2",
            "title": "The order you’ll do the questions in",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d4-time-management-3",
            "title": "Which questions you will attack first",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d4-time-management-4",
            "title": "Which questions you will attack last",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d4-time-management-5",
            "title": "When you’ll skip a question",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d4-time-management-6",
            "title": "Guessing strategy",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d4-verbal-3",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21, Groups 22-24, and Group 25 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              },
              {
                "text": "Groups 22-24",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_22-24.PNG"
              },
              {
                "text": "Group 25",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_25.PNG"
              }
            ]
          },
          {
            "id": "w8d4-verbal-4",
            "title": "Day 25 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=25"
              }
            ]
          },
          {
            "id": "w8d4-verbal-5",
            "title": "Take Groups 21-25 Pairing Quiz #2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 21-25 Pairing Quiz #2",
                "url": "https://www.gregmat.com/quizzes/quiz/gre-sentence-equivalence-quiz-groups-21-25-2-kyts"
              }
            ]
          },
          {
            "id": "w8d4-verbal-6",
            "title": "Study Group 26 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 26 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502842736/set-26-flash-cards/"
              }
            ]
          },
          {
            "id": "w8d4-verbal-7",
            "title": "Complete Verbal Reasoning Practice Book: Mixed Practice Set 2",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d4-verbal-8",
            "title": "1st Edition: pp. 126-134",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d4-verbal-9",
            "title": "2nd Edition: pp. 126-134",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d4-verbal-10",
            "title": "Do under timed conditions",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d4-verbal-11",
            "title": "Carefully scrutinize incorrect answers",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d4-verbal-12",
            "title": "Identify specifically what mistakes were made",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w8d5",
    "type": "day",
    "week": 8,
    "day": 5,
    "label": "Day 5",
    "title": "Week 8 - Day 5",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d5-quant-1",
            "title": "(Optional) Quant Skills Checklist 4",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Quant Skills Checklist 4",
                "url": "https://www.gregmat.com/class/improve-your-skills-quant-quant-skills-checklist-4"
              }
            ]
          },
          {
            "id": "w8d5-quant-2",
            "title": "Test Your Skills",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d5-verbal-1",
            "title": "(Optional) Verbal Skills Checklist 2",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Verbal Skills Checklist 2",
                "url": "https://www.gregmat.com/class/improve-your-skills-verbal-verbal-skills-checklist-2"
              }
            ]
          },
          {
            "id": "w8d5-verbal-2",
            "title": "Test Your Skills",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d5-quant-3",
            "title": "User Choice (suggestions below)",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d5-quant-4",
            "title": "Big Book Quant Sections",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d5-quant-5",
            "title": "GMATCLUB Question Bank",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "GMATCLUB Question Bank",
                "url": "https://gmatclub.com/forum/search.php?view=search_tags"
              }
            ]
          },
          {
            "id": "w8d5-quant-6",
            "title": "Unfinished Manhattan 5-lb Chapters",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w8d5-review-1",
            "title": "Redo PowerPrep 1 Test",
            "optional": false,
            "type": "test",
            "links": [
              {
                "text": "PowerPrep 1 Test",
                "url": "https://www.ets.org/gre/revised_general/prepare/powerprep/"
              }
            ]
          },
          {
            "id": "w8d5-review-2",
            "title": "Redo Quantitative Reasoning Practice Book: Mixed Practice Sets",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d5-verbal-3",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21, Groups 22-24, and Group 25 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              },
              {
                "text": "Groups 22-24",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_22-24.PNG"
              },
              {
                "text": "Group 25",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Group_25.PNG"
              }
            ]
          },
          {
            "id": "w8d5-verbal-4",
            "title": "Day 25 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=25"
              }
            ]
          },
          {
            "id": "w8d5-verbal-5",
            "title": "Study Group 26 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 26 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502842736/set-26-flash-cards/"
              }
            ]
          },
          {
            "id": "w8d5-verbal-6",
            "title": "Complete Verbal Reasoning Practice Book: Mixed Practice Set 3",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d5-verbal-7",
            "title": "1st Edition: pp. 152-160",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d5-verbal-8",
            "title": "2nd Edition: pp. 152-160",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d5-verbal-9",
            "title": "Do under timed conditions",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d5-verbal-10",
            "title": "Carefully scrutinize incorrect answers",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d5-verbal-11",
            "title": "Identify specifically what mistakes were made",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "w8d6",
    "type": "day",
    "week": 8,
    "day": 6,
    "label": "Day 6",
    "title": "Week 8 - Day 6",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d6-quant-1",
            "title": "(Optional) Quant Skills Checklist 5",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": " Quant Skills Checklist 5",
                "url": "https://www.gregmat.com/class/quant-skills-checklist-november-25"
              }
            ]
          },
          {
            "id": "w8d6-quant-2",
            "title": "Test Your Skills",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d6-verbal-1",
            "title": "(Optional) Verbal Skills Checklist 3",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": " Verbal Skills Checklist 3",
                "url": "https://www.gregmat.com/class/improve-your-skills-verbal-verbal-skills-checklist-3"
              }
            ]
          },
          {
            "id": "w8d6-verbal-2",
            "title": "Test Your Skills",
            "optional": false,
            "type": "video",
            "links": []
          },
          {
            "id": "w8d6-verbal-3",
            "title": "In the Official Guide GRE book, Practice Test 2, complete the following under timed conditions:",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w8d6-verbal-4",
            "title": "2nd Edition: pp. 446-455",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d6-verbal-5",
            "title": "3rd Edition: pp. 470-479",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d6-quant-3",
            "title": "2nd Edition: pp. 465-472",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d6-quant-4",
            "title": "3rd Edition: pp. 488-496",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d6-quant-5",
            "title": "(Optional) Visit the Essay Writer",
            "optional": true,
            "type": "writing",
            "links": [
              {
                "text": "Essay Writer",
                "url": "https://www.gregmat.com/write-essay"
              }
            ]
          },
          {
            "id": "w8d6-quant-6",
            "title": "Randomly select an issue prompt",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d6-quant-7",
            "title": "Write the essay and submit it",
            "optional": false,
            "type": "writing",
            "links": []
          },
          {
            "id": "w8d6-quant-8",
            "title": "Do essays BEFORE verbal and quant sections for added realism",
            "optional": false,
            "type": "writing",
            "links": []
          },
          {
            "id": "w8d6-quant-9",
            "title": "Grade the essay after you're done with the test (note that this AI grading might not be 100% accurate!)",
            "optional": false,
            "type": "writing",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w8d6-review-1",
            "title": "Make sure to identify as specifically as possible what mistakes were made.",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d6-verbal-6",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21, Groups 22-24, and Groups 25-26 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              },
              {
                "text": "Groups 22-24",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_22-24.PNG"
              },
              {
                "text": "Groups 25-26 ",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_25-26.PNG"
              }
            ]
          },
          {
            "id": "w8d6-verbal-7",
            "title": "Day 26 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=26"
              }
            ]
          },
          {
            "id": "w8d6-verbal-8",
            "title": "Study Group 27 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 27 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502843323/set-27-flash-cards/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w8d7",
    "type": "day",
    "week": 8,
    "day": 7,
    "label": "Day 7",
    "title": "Week 8 - Day 7",
    "sections": [
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d7-quant-1",
            "title": "(Optional) Quant Skills Checklist 6",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Quant Skills Checklist 6",
                "url": "https://www.gregmat.com/class/quant-skills-checklist-november-30"
              }
            ]
          },
          {
            "id": "w8d7-quant-2",
            "title": "Test Your Skills",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d7-verbal-1",
            "title": "(Optional) Verbal Skills Checklist 4",
            "optional": true,
            "type": "video",
            "links": [
              {
                "text": "Verbal Skills Checklist 4",
                "url": "https://www.gregmat.com/class/improve-your-skills-verbal-verbal-skills-checklist-4"
              }
            ]
          },
          {
            "id": "w8d7-verbal-2",
            "title": "Test Your Skills",
            "optional": false,
            "type": "video",
            "links": []
          }
        ]
      },
      {
        "category": "Quant",
        "icon": "🧮",
        "tasks": [
          {
            "id": "w8d7-quant-3",
            "title": "User Choice (suggestions below)",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d7-quant-4",
            "title": "Big Book Quant Sections",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d7-quant-5",
            "title": "3 Easy, 4 Medium, 3 Hard Quiz #1",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "3 Easy, 4 Medium, 3 Hard Quiz #1",
                "url": "http://www.gregmat.com/quizzes/quiz/3-easy-4-medium-3-hard-quant-quiz-feb-24-2023"
              }
            ]
          },
          {
            "id": "w8d7-quant-6",
            "title": "Solution Video",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Solution Video",
                "url": "https://www.gregmat.com/class/3-easy-4-medium-3-hard-quant-practice"
              }
            ]
          },
          {
            "id": "w8d7-quant-7",
            "title": "3 Easy, 4 Medium, 3 Hard Quiz #2",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "3 Easy, 4 Medium, 3 Hard Quiz #2",
                "url": "http://www.gregmat.com/quizzes/quiz/3-easy-4-medium-3-hard-quant-quiz-feb-27-2023"
              }
            ]
          },
          {
            "id": "w8d7-quant-8",
            "title": "Solution Video",
            "optional": false,
            "type": "video",
            "links": [
              {
                "text": "Solution Video",
                "url": "https://www.gregmat.com/class/3-easy-4-medium-3-hard-quant-practice-session-2"
              }
            ]
          },
          {
            "id": "w8d7-quant-9",
            "title": "GMATCLUB Question Bank",
            "optional": false,
            "type": "other",
            "links": [
              {
                "text": "GMATCLUB Question Bank",
                "url": "https://gmatclub.com/forum/search.php?view=search_tags"
              }
            ]
          },
          {
            "id": "w8d7-quant-10",
            "title": "Unfinished Manhattan 5-lb Chapters",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w8d7-review-1",
            "title": "Redo PowerPrep 1 Test",
            "optional": false,
            "type": "test",
            "links": [
              {
                "text": "PowerPrep 1 Test",
                "url": "https://www.ets.org/gre/revised_general/prepare/powerprep/"
              }
            ]
          },
          {
            "id": "w8d7-review-2",
            "title": "Redo Quantitative Reasoning Practice Book: Mixed Practice Sets",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Verbal",
        "icon": "🧠",
        "tasks": [
          {
            "id": "w8d7-verbal-3",
            "title": "User Choice (suggestions below)",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8d7-verbal-4",
            "title": "Big Book Verbal Sections",
            "optional": false,
            "type": "practice",
            "links": []
          }
        ]
      },
      {
        "category": "Review",
        "icon": "📝",
        "tasks": [
          {
            "id": "w8d7-review-3",
            "title": "Redo PowerPrep 1 Test",
            "optional": false,
            "type": "test",
            "links": [
              {
                "text": "PowerPrep 1 Test",
                "url": "https://www.ets.org/gre/revised_general/prepare/powerprep/"
              }
            ]
          },
          {
            "id": "w8d7-review-4",
            "title": "Redo Verbal Mixed Practice Sets",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d7-review-5",
            "title": "Redo Official Guide Practice Sets",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8d7-review-6",
            "title": "Revise Groups 1-3, Groups 4-6, Groups 7-9, Groups 10-12, Groups 13-15, Groups 16-18, and Groups 19-21, Groups 22-24, and Groups 25-28 Vocabulary",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Groups 1-3",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_1-3.PNG"
              },
              {
                "text": "Groups 4-6",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_4-6.PNG"
              },
              {
                "text": "Groups 7-9",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_7-9.PNG"
              },
              {
                "text": "Groups 10-12",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_10-12.PNG"
              },
              {
                "text": "Groups 13-15",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_13-15.PNG"
              },
              {
                "text": "Groups 16-18",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_16-18.PNG"
              },
              {
                "text": "Groups 19-21",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_19-21.PNG"
              },
              {
                "text": "Groups 22-24",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_22-24.PNG"
              },
              {
                "text": "Groups 25-28 ",
                "url": "https://gregmatapi.s3.amazonaws.com/media/misc/Groups_25-26.PNG"
              }
            ]
          },
          {
            "id": "w8d7-review-7",
            "title": "Study Group 27 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 27 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/502843323/set-27-flash-cards/"
              }
            ]
          },
          {
            "id": "w8d7-review-8",
            "title": "Study Group 28 Vocabulary Flash Cards",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Group 28 Vocabulary Flash Cards",
                "url": "https://quizlet.com/in/510835231/set-28-flash-cards/"
              }
            ]
          },
          {
            "id": "w8d7-review-9",
            "title": "Day 27 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "http://www.gregmat.com/mountains/vocab-mountain?day=27"
              }
            ]
          },
          {
            "id": "w8d7-review-10",
            "title": "Day 28 of the Vocab Mountain",
            "optional": false,
            "type": "review",
            "links": [
              {
                "text": "Vocab Mountain",
                "url": "https://www.gregmat.com/mountains/vocab-mountain?day=28"
              }
            ]
          },
          {
            "id": "w8d7-review-11",
            "title": "Take Groups 25-27 Vocabulary Quiz",
            "optional": false,
            "type": "quiz",
            "links": [
              {
                "text": "Groups 25-27 Vocabulary Quiz",
                "url": "https://www.gregmat.com/class/vocab-quiz-hour-groups-25-27"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "w8-practice-test",
    "type": "practice-test",
    "week": 8,
    "day": 8,
    "label": "Final Practice Test",
    "title": "Week 8 - Practice Test",
    "sections": [
      {
        "category": "Final Practice Test",
        "icon": "📌",
        "tasks": [
          {
            "id": "w8-practice-test-final-practice-test-1",
            "title": "You’ve just completed the two-month plan! I know it was a lot of work and — at times — tedious. But I’m proud of you for getting through it, even if it did maybe, possibly, perhaps take you a little bit longer than two months. No blame here. The plan was intense, exhaustive, and exhausting.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8-practice-test-final-practice-test-2",
            "title": "But now we need to put these newly learned skills to the test with another practice test. For this, you have two options:",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w8-practice-test-final-practice-test-3",
            "title": "PowerPrep+ (1,2 or 3) for the shorter GRE",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w8-practice-test-final-practice-test-4",
            "title": "There are pros and cons to this guy. Let’s start with the pros. First, it’s an official ETS test that you can take using the actual software and setup you’ll see on test day. Also, you'll get a score for the writing.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8-practice-test-final-practice-test-5",
            "title": "Here’s the bad news… it's $45.",
            "optional": false,
            "type": "other",
            "links": []
          },
          {
            "id": "w8-practice-test-final-practice-test-6",
            "title": "Yes, $45. Well, unless you have a GRE Fee Reduction voucher, in which case the first two PowerPrep+ tests are free.",
            "optional": false,
            "type": "test",
            "links": [
              {
                "text": "GRE Fee Reduction voucher",
                "url": "https://www.ets.org/gre/score-users/reducing-barriers/fee-reductions.html"
              }
            ]
          },
          {
            "id": "w8-practice-test-final-practice-test-7",
            "title": "PowerPrep 2 for the shorter GRE",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w8-practice-test-final-practice-test-8",
            "title": "There are pros and cons to one of these guys too. Let’s start with the good news. This test is free. The bad news? It doesn't grade your writing.",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8-practice-test-final-practice-test-9",
            "title": "So I leave the decision to you. Whichever you choose, I want to extend my sincere congratulations to you for finishing the two-month plan. And I hope your test goes well!",
            "optional": false,
            "type": "practice",
            "links": []
          },
          {
            "id": "w8-practice-test-final-practice-test-10",
            "title": "One final note. If your practice test score is not exactly where you want it to be, don’t fret and try not to panic. Go through the questions you missed carefully, methodically, and deliberately and try to identify as specifically as possible what mistake you made. If you analyze those mistakes well, you’ll be well on your way to a higher score.",
            "optional": false,
            "type": "test",
            "links": []
          },
          {
            "id": "w8-practice-test-final-practice-test-11",
            "title": "Chat soon!",
            "optional": false,
            "type": "other",
            "links": []
          }
        ]
      }
    ]
  }
];
