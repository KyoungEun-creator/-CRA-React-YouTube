import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Section, Nav } from "../style/LayoutStyle";
import { useRecoilValue } from "recoil";  
import { detailedNavAtom } from "../recoil/mainAtom";
import DetailedNavItem from "../Components/DetailedNavItem";

const DetailedNav = styled(Nav)`
    z-index: 100;
    position: fixed;
    overflow: scroll;
`
const DetailedNavGuideSection = styled(Section)`
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid lightgray;
`
const DetailedNavFooter = styled(Section)`
`

const DetailedNavContainer = () => {

    const detailedNavOpen = useRecoilValue(detailedNavAtom);

    const DetailedNavBtnHomeData = [
        {
            id: "DetailedNavBtnHome_1",
            value: "home",
            title: "홈",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/house-solid.svg", 
            alt: "detailedNavBtn",
            label: "홈", 
        },
        {
            id: "DetailedNavBtnHome_2",
            value: "shorts",
            title: "Shorts",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/youtube-shorts-logo.svg", 
            alt: "detailedNavBtn",
            label: "Shorts", 
        },
        {
            id: "DetailedNavBtnHome_3",
            value: "subscribe",
            title: "구독",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/warehouse-solid.svg", 
            alt: "detailedNavBtn",
            label: "구독", 
        },
        {
            id: "DetailedNavBtnHome_4",
            value: "youtubeMusic",
            title: "YouTube Music",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/database-solid.svg", 
            alt: "detailedNavBtn",
            label: "YouTube Music", 
        },
        {
            id: "DetailedNavBtnHome_5",
            value: "storage",
            title: "보관함",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/photo-film-solid.svg", 
            alt: "detailedNavBtn",
            label: "보관함", 
        },
        {
            id: "DetailedNavBtnHome_6",
            value: "record",
            title: "시청기록",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/clock-rotate-left-solid.svg", 
            alt: "detailedNavBtn",
            label: "시청기록", 
        },
        {
            id: "DetailedNavBtnHome_7",
            value: "myVideos",
            title: "내 동영상",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/square-caret-right-regular.svg", 
            alt: "detailedNavBtn",
            label: "내 동영상", 
        },
        {
            id: "DetailedNavBtnHome_8",
            value: "myMovies",
            title: "내 영화",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/clapperboard-solid.svg", 
            alt: "detailedNavBtn",
            label: "내 영화", 
        },
        {
            id: "DetailedNavBtnHome_9",
            value: "watchLater",
            title: "나중에 볼 동영상",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/clock-regular.svg", 
            alt: "detailedNavBtn",
            label: "나중에 볼 동영상", 
        },
        {
            id: "DetailedNavBtnHome_10",
            value: "offlineSaved",
            title: "오프라인 저장 동영상",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/download-solid.svg", 
            alt: "detailedNavBtn",
            label: "오프라인 저장 동영상", 
        },
        {
            id: "DetailedNavBtnHome_11",
            value: "more",
            title: "더보기",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/angle-down-solid.svg", 
            alt: "detailedNavBtn",
            label: "더보기", 
        }
    ];

    const DetailedNavBtnSubscribeData = [
        {
            id: "DetailedNavBtnSubscribe_1",
            value: "YouTube Music",
            title: "YouTube Music",
            imgName: "detailedSubscribingImg",
            imgSrc: "https://yt3.ggpht.com/bMa6Y7qQ6Q0zCt-5M0gxsmHh6gRdU7m4AnJ6LTN1aNxH7nDMNjnB3vucd4sJ_d6olVEMSh-gMg=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "Jazz Melody", 
        },
        {
            id: "DetailedNavBtnSubscribe_2",
            value: "YouTube Music",
            title: "YouTube Music",
            imgName: "detailedSubscribingImg",
            imgSrc: "https://yt3.ggpht.com/aW-CCbaQ2rbDrEvmpjf630Xhh4wiXEAYs_vZuhX7t3T7tqohQGYl1YzpWNORdJwPin6SMtstyw=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ", 
        },
        {
            id: "DetailedNavBtnSubscribe_3",
            value: "YouTube Music",
            title: "YouTube Music",
            imgName: "detailedSubscribingImg",
            imgSrc: "https://yt3.ggpht.com/Lo23b_zLzkxOi2UyFCCWvRPp7jmVv7qLv3yMgEV1hi7iq2Bf9E4tRIDhhfDPeYdO2dNQAgaaAAQ=s88-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "반고흐가 되고싶어", 
        },
        {
            id: "DetailedNavBtnSubscribe_4",
            value: "YouTube Music",
            title: "YouTube Music",
            imgName: "detailedSubscribingImg",
            imgSrc: "https://yt3.ggpht.com/ytc/AOPolaSBFQ8BAVyWY5yo-CNlnFmJ3LE_7syzZpjG11lntg=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "재즈기자 Jazz Editor", 
        },
        {
            id: "DetailedNavBtnSubscribe_5",
            value: "YouTube Music",
            title: "YouTube Music",
            imgName: "detailedSubscribingImg",
            imgSrc: "https://yt3.ggpht.com/RL_eRSTZjEdc3vAB78wiK6xihSd3wInZ4g1TA3JLzOvxRdJg_2IKqIw8y3CAd03qvgsBb-P5jQ=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "딩고 뮤직 / dingo music", 
        },
        {
            id: "DetailedNavBtnSubscribe_6",
            value: "YouTube Music",
            title: "YouTube Music",
            imgName: "detailedSubscribingImg",
            imgSrc: "https://yt3.ggpht.com/ayr7hPQ8q04Lms3TZpp9lkZosTjSo4euJ0l_pIyjsC9OhZkqXh7fo7AnHJwmErEiTWBbnoSE=s88-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "재즈오빠 Jazzoppa", 
        },
        {
            id: "DetailedNavBtnSubscribe_7",
            value: "YouTube Music",
            title: "YouTube Music",
            imgName: "detailedSubscribingImg",
            imgSrc: "https://yt3.ggpht.com/v-yQ9UVqUgQlxBwlA2qBPI7_QeqbmgrD7uJQiKK4GIvgmrsJeau059F0uFLTRX3XaopNyEm25w=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "때잉", 
        },
        {
            id: "DetailedNavBtnSubscribe_8",
            value: "YouTube Music",
            title: "YouTube Music",
            imgName: "detailedSubscribingImg",
            imgSrc: "https://yt3.ggpht.com/7C7gf_M2SLHMxYY74vn7QPRJuGrc9Ul2ehvf6LXmHDeAVi4-dBiSOGB8bXhMeLz0GYvqzwbk=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "기분Jazz네 | Mood is Jazz", 
        },
        {
            id: "DetailedNavBtnSubscribe_9",
            value: "구독 더보기",
            title: "구독 더보기",
            imgName: "detailedHomeImg",
            imgSrc: "imgs/angle-down-solid.svg", 
            alt: "detailedNavBtn",
            label: "376개 더보기", 
        }
    ];

    const DetailedNavBtnExploreData = [
        {
            id: "DetailedNavBtnExplore_1",
            value: "인기 급상승",
            title: "인기 급상승",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/fire-solid.svg", 
            alt: "detailedNavBtn",
            label: "인기 급상승", 
        },
        {
            id: "DetailedNavBtnExplore_2",
            value: "쇼핑",
            title: "쇼핑",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/bag-shopping-solid.svg", 
            alt: "detailedNavBtn",
            label: "쇼핑", 
        },
        {
            id: "DetailedNavBtnExplore_3",
            value: "음악",
            title: "음악",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/music-solid.svg", 
            alt: "detailedNavBtn",
            label: "음악", 
        },
        {
            id: "DetailedNavBtnExplore_4",
            value: "영화",
            title: "영화",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/clapperboard-solid.svg", 
            alt: "detailedNavBtn",
            label: "영화", 
        },
        {
            id: "DetailedNavBtnExplore_5",
            value: "YouTube Music",
            title: "YouTube Music",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/wifi-solid.svg", 
            alt: "detailedNavBtn",
            label: "실시간", 
        },
        {
            id: "DetailedNavBtnExplore_6",
            value: "게임",
            title: "게임",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/gamepad-solid.svg", 
            alt: "detailedNavBtn",
            label: "게임", 
        },
        {
            id: "DetailedNavBtnExplore_7",
            value: "스포츠",
            title: "스포츠",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/medal-solid.svg", 
            alt: "detailedNavBtn",
            label: "스포츠", 
        },
        {
            id: "DetailedNavBtnExplore_8",
            value: "학습",
            title: "학습",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/lightbulb-regular.svg", 
            alt: "detailedNavBtn",
            label: "학습", 
        }
    ];

    const DetailedNavBtnExtraData = [
        {
            id: "DetailedNavBtnExtra_1",
            value: "YouTube Studio",
            title: "YouTube Studio",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/youtube-studio.webp", 
            alt: "detailedNavBtn",
            label: "YouTube 스튜디오", 
        },
        {
            id: "DetailedNavBtnExtra_2",
            value: "YouTube Music",
            title: "YouTube Music",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/youtube-music_icon.png", 
            alt: "detailedNavBtn",
            label: "YouTube Music", 
        },
        {
            id: "DetailedNavBtnExtra_3",
            value: "YouTube Kids",
            title: "YouTube Kids",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/youtube-kids.png", 
            alt: "detailedNavBtn",
            label: "YouTube Kids", 
        }
    ];

    const DetailedNavBtnSettingData = [
        {
            id: "DetailedNavBtnSetting_1",
            value: "설정",
            title: "설정",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/gear-solid.svg", 
            alt: "detailedNavBtn",
            label: "설정", 
        },
        {
            id: "DetailedNavBtnSetting_2",
            value: "신고 기록",
            title: "신고 기록",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/flag-regular.svg", 
            alt: "detailedNavBtn",
            label: "신고 기록", 
        },
        {
            id: "DetailedNavBtnSetting_3",
            value: "고객센터",
            title: "고객센터",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/circle-question-solid.svg", 
            alt: "detailedNavBtn",
            label: "고객센터", 
        },
        {
            id: "DetailedNavBtnSetting_4",
            value: "의견 보내기",
            title: "의견 보내기",
            imgName: "detailedBtnImg",
            imgSrc: "imgs/circle-exclamation-solid.svg", 
            alt: "detailedNavBtn",
            label: "의견 보내기", 
        }
    ];
    
    const FooterData = [
        {
            id: "FooterData_1",
            footerContent: "정보 보도자료 저작권 문의하기 크리에이터 광고 개발자"
        },
        {
            id: "FooterData_2",
            footerContent: "약관 개인정보처리방침 정책 및 안전 YouTube 작동의 원리 새로운 기능 테스트하기"
        },
        {
            id: "FooterData_3",
            footerContent: "© 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보, 불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다."
        }
    ];

    return (
        detailedNavOpen && (
            <DetailedNav
                width="224px" height="100vh" padding="0 12px" margin="56px 0 0 0" bgColor="white" flex="v_between">
                <section>
                    <DetailedNavGuideSection flex="v_center">
                        {
                            DetailedNavBtnHomeData.map((elem) => {
                                return (
                                    <Link key={elem.id} to={elem.value}>
                                        <DetailedNavItem key={elem.id} data={elem} />       
                                    </Link>
                                )
                            })
                        }
                    </DetailedNavGuideSection>
                    <DetailedNavGuideSection flex="v_center">
                        {
                            DetailedNavBtnSubscribeData.map((elem) => {
                                return <DetailedNavItem key={elem.id} data={elem} />
                            })
                        }
                    </DetailedNavGuideSection>
                    <DetailedNavGuideSection flex="v_center">
                        {
                            DetailedNavBtnExploreData.map((elem) => {
                                return <DetailedNavItem key={elem.id} data={elem} />
                            })
                        }
                    </DetailedNavGuideSection>
                    <DetailedNavGuideSection flex="v_center">
                        {
                            DetailedNavBtnExtraData.map((elem) => {
                                return <DetailedNavItem key={elem.id} data={elem} />
                            })
                        }
                    </DetailedNavGuideSection>
                    <DetailedNavGuideSection flex="v_center">
                        {
                            DetailedNavBtnSettingData.map((elem) => {
                                return <DetailedNavItem key={elem.id} data={elem} />
                            })
                        }
                    </DetailedNavGuideSection>
                </section>

                <DetailedNavFooter
                    margin="20px 0 60px 0" flex="v_center">
                    {
                        FooterData.map((elem) => {
                            return <DetailedNavItem key={elem.id} data={elem} />
                        })
                    }
                </DetailedNavFooter>
            </DetailedNav>
        )
    )
}

export default DetailedNavContainer