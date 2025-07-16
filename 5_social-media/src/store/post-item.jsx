import { createContext, useEffect, useReducer, useState } from "react";

export const PostData = createContext({
  postData: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const reducerFunc = (currentVal, action) => {
  let newPostData = currentVal;
  if (action.type === "ADD_POST") {
    newPostData = [action.payload.newPostData, ...currentVal];
  } else if (action.type === "ADD_ALL_POST") {
    newPostData = action.payload.newPostData;
  } else if (action.type === "DELETE_POST") {
    newPostData = currentVal.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostData;
};

const PostDataProvider = ({ children }) => {
  // const DEFAULT_POST_DATA = [
  //   {
  //     id: 1,
  //     userId: "user-11",
  //     postTitle: "Graduation Done",
  //     postBody:
  //       "I successfully done my graduation from L.D. college of engineering",
  //     postTags: ["Gradution", "Study", "College"],
  //     reaction: 5,
  //   },
  //   {
  //     id: 2,
  //     userId: "user-12",
  //     postTitle: "Read Book",
  //     postBody: "After many day, I start the reading of the books.",
  //     postTags: ["Book", "Read"],
  //     reaction: 7,
  //   },
  // ];

  const DEFAULT_POST_DATA = [
    {
      id: 1,
      userId: 121,
      postTitle: "His mother had always taught him",
      postBody:
        "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      postTags: ["history", "american", "crime"],
      reaction: 192,
    },
    {
      id: 2,
      userId: 91,
      postTitle: "He was an expert but not in a discipline",
      postBody:
        "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
      postTags: ["french", "fiction", "english"],
      reaction: 859,
    },
    {
      id: 3,
      userId: 16,
      postTitle: "Dave watched as the forest burned up on the hill.",
      postBody:
        "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
      postTags: ["magical", "history", "french"],
      reaction: 1448,
    },
    {
      id: 4,
      userId: 47,
      postTitle: "All he wanted was a candy bar.",
      postBody:
        "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
      postTags: ["mystery", "english", "american"],
      reaction: 359,
    },
    {
      id: 5,
      userId: 131,
      postTitle: "Hopes and dreams were dashed that day.",
      postBody:
        "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
      postTags: ["crime", "mystery", "love"],
      reaction: 119,
    },
    {
      id: 6,
      userId: 98,
      postTitle: "Dave wasn't exactly sure how he had ended up",
      postBody:
        "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
      postTags: ["english", "classic", "american"],
      reaction: 15,
    },
    {
      id: 7,
      userId: 70,
      postTitle: "This is important to remember.",
      postBody:
        "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
      postTags: ["magical", "crime"],
      reaction: 127,
    },
    {
      id: 8,
      userId: 67,
      postTitle: "One can cook on and with an open fire.",
      postBody:
        "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
      postTags: ["american", "english"],
      reaction: 1271,
    },
    {
      id: 9,
      userId: 82,
      postTitle: "There are different types of secrets.",
      postBody:
        "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
      postTags: ["american", "history", "magical"],
      reaction: 703,
    },
    {
      id: 10,
      userId: 144,
      postTitle: "They rushed out the door.",
      postBody:
        "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
      postTags: ["fiction", "magical", "history"],
      reaction: 455,
    },
    {
      id: 11,
      userId: 43,
      postTitle: "It wasn't quite yet time to panic.",
      postBody:
        "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.",
      postTags: ["mystery", "american", "history"],
      reaction: 453,
    },
    {
      id: 12,
      userId: 82,
      postTitle: "She was aware that things could go wrong.",
      postBody:
        "She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.",
      postTags: ["love", "english"],
      reaction: 362,
    },
    {
      id: 13,
      userId: 199,
      postTitle: "She wanted rainbow hair.",
      postBody:
        "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.",
      postTags: ["mystery", "classic", "french"],
      reaction: 268,
    },
    {
      id: 14,
      userId: 140,
      postTitle: "The paper was blank.",
      postBody:
        "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.",
      postTags: ["mystery", "english", "love"],
      reaction: 118,
    },
    {
      id: 15,
      userId: 1,
      postTitle: "The trees, therefore, must be such old",
      postBody:
        "The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.",
      postTags: ["fiction", "history", "crime"],
      reaction: 951,
    },
    {
      id: 16,
      userId: 99,
      postTitle: "There was only one way to do things in the Statton house.",
      postBody:
        "There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today.",
      postTags: ["magical", "french", "american"],
      reaction: 1257,
    },
    {
      id: 17,
      userId: 30,
      postTitle: "She was in a hurry.",
      postBody:
        "She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.",
      postTags: ["french", "magical", "english"],
      reaction: 50,
    },
    {
      id: 18,
      userId: 97,
      postTitle: "She had a terrible habit o comparing her life to others",
      postBody:
        "She had a terrible habit o comparing her life to others. She realized that their life experiences were completely different than her own and that she saw only what they wanted her to see, but that didn't matter. She still compared herself and yearned for what she thought they had and she didn't.",
      postTags: ["history", "french", "love"],
      reaction: 277,
    },
    {
      id: 19,
      userId: 143,
      postTitle: "The rain and wind abruptly stopped.",
      postBody:
        "The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.",
      postTags: ["fiction", "crime", "magical"],
      reaction: 566,
    },
    {
      id: 20,
      userId: 12,
      postTitle: "He couldn't remember exactly where he had read it",
      postBody:
        "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
      postTags: ["french", "classic"],
      reaction: 999,
    },
    {
      id: 21,
      userId: 136,
      postTitle: "He wandered down the stairs and into the basement",
      postBody:
        "He wandered down the stairs and into the basement. The damp, musty smell of un-use hung in the air. A single, small window let in a glimmer of light, but this simply made the shadows in the basement deeper. He inhaled deeply and looked around at a mess that had been accumulating for over 25 years. He was positive that this was the place he wanted to live.",
      postTags: ["french", "american"],
      reaction: 1376,
    },
    {
      id: 22,
      userId: 183,
      postTitle: "She has seen this scene before.",
      postBody:
        "She has seen this scene before. It had come to her in dreams many times before. She had to pinch herself to make sure it wasn't a dream again. As her fingers squeezed against her arm, she felt the pain. It was this pain that immediately woke her up.",
      postTags: ["classic", "love", "history"],
      reaction: 1241,
    },
    {
      id: 23,
      userId: 206,
      postTitle:
        "It's an unfortunate reality that we don't teach people how to make money",
      postBody:
        "It's an unfortunate reality that we don't teach people how to make money (beyond getting a 9 to 5 job) as part of our education system. The truth is there are a lot of different, legitimate ways to make money. That doesn't mean they are easy and that you won't have to work hard to succeed, but it does mean that if you're willing to open your mind a bit you don't have to be stuck in an office from 9 to 5 for the next fifty years o your life.",
      postTags: ["crime", "english"],
      reaction: 675,
    },
    {
      id: 24,
      userId: 124,
      postTitle: "The robot clicked disapprovingly.",
      postBody:
        'The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. "Sir, you will undoubtedly end up in a drunkard\'s grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.',
      postTags: ["crime", "american", "love"],
      reaction: 87,
    },
    {
      id: 25,
      userId: 148,
      postTitle: "It went through such rapid contortions",
      postBody:
        "It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.",
      postTags: ["fiction", "history", "french"],
      reaction: 1162,
    },
    {
      id: 26,
      userId: 156,
      postTitle: "She patiently waited for his number to be called.",
      postBody:
        "She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She's resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.",
      postTags: ["french", "mystery", "crime"],
      reaction: 444,
    },
    {
      id: 27,
      userId: 95,
      postTitle: "Ten more steps.",
      postBody:
        "If he could take ten more steps it would be over, but his legs wouldn't move. He tried to will them to work, but they wouldn't listen to his brain. Ten more steps and it would be over but it didn't appear he would be able to do it.",
      postTags: ["mystery", "classic", "love"],
      reaction: 1387,
    },
    {
      id: 28,
      userId: 19,
      postTitle: "He had three simple rules by which he lived.",
      postBody:
        "He had three simple rules by which he lived. The first was to never eat blue food. There was nothing in nature that was edible that was blue. People often asked about blueberries, but everyone knows those are actually purple. He understood it was one of the stranger rules to live by, but it had served him well thus far in the 50+ years of his life.",
      postTags: ["crime", "love"],
      reaction: 1291,
    },
    {
      id: 29,
      userId: 74,
      postTitle: "The chair sat in the corner where it had been",
      postBody:
        "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
      postTags: ["mystery", "american"],
      reaction: 1,
    },
    {
      id: 30,
      userId: 177,
      postTitle: "Things aren't going well at all",
      postBody:
        "Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon.",
      postTags: ["american", "love", "fiction"],
      reaction: 465,
    },
  ];

  const [postData, dipaturePostData] = useReducer(reducerFunc, []);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    // const controller = new AbortController();
    // const signal = controller.signal;

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        let newPostData = [];
        data.posts.map((item) => {
          const obj = {
            id: item.id,
            userId: item.userId,
            postTitle: item.title,
            postBody: item.body,
            postTags: item.tags,
            reaction: item.reactions.likes,
          };
          newPostData = [...newPostData, obj];

          return newPostData;
        });
        addAllPost(newPostData);
        setFetching(false);
      });

    // return () => {
    //   console.log("useEffect is aborted");
    //   // controller.abort();
    // };
  }, []);

  const addPost = (newPostData) => {
    console.log(newPostData);
    const actionObj = {
      type: "ADD_POST",
      payload: {
        newPostData,
      },
    };
    dipaturePostData(actionObj);
  };

  const addAllPost = (newPostData) => {
    const actionObj = {
      type: "ADD_ALL_POST",
      payload: {
        newPostData,
      },
    };
    dipaturePostData(actionObj);
  };

  const deletePost = (postId) => {
    const actionObj = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dipaturePostData(actionObj);
  };

  return (
    <PostData.Provider value={{ postData, addPost, fetching, deletePost }}>
      {children}
    </PostData.Provider>
  );
};

export default PostDataProvider;
