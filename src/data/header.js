import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "만복이 유튜브사이트",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "추천 개발자",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "웹디자인기능사",
        icon: <CiBoxes />,
        src: "/webd"
    },
    {
        title: "웹표준 사이트",
        icon: <CiBullhorn />,
        src: "/search/웹표준사이트"
    },
    {
        title: "GSAP Parallax",
        icon: <CiCoffeeCup />,
        src: "/search/GSAP"
    },
    {
        title: "몸짱 프로젝트",
        icon: <CiDumbbell />,
        src: "/search/헬스"
    },
    {
        title: "먹방 모음",
        icon: <CiFries />,
        src: "/search/먹방"
    },
];

export const searchKeyword = [
    {
        title: "webstoryboy",
        src: "/search/webstoryboy"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/manbock",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/s00__34/",
        icon: <AiOutlineInstagram />
    },
]