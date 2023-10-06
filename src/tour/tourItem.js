/* 정보입력 */

const TourItem = ({ article }) => {
  const {
    MAIN_TITLE /* 콘텐츠명 */,
    TITLE /* 제목 */,
    GUGUN_NM /* 구군 */,
    HOMEPAGE_URL /* 홈페이지 */,
    MAIN_IMG_NORMAL /* 이미지 URL */,
    MIDDLE_SIZE_RM1 /* 편의시설 */,
    USAGE_DAY_WEEK_AND_TIME /* 운영 및 시간 */,
  } = article;
  return ( 
  <div className="item">
    <div className="title">
            <span>{GUGUN_NM}</span>
            <strong>{MAIN_TITLE}</strong>
            <img src={MAIN_IMG_NORMAL} alt={TITLE} />
            <h4>{TITLE}</h4>
            <p>편의시설 : {MIDDLE_SIZE_RM1}</p>
            <p>운영 및 시간 : {USAGE_DAY_WEEK_AND_TIME}</p>
    </div> {/* .title end */}
    

{/* 조건연산자 > 해당하는 값이 있으면 불러오고 없으면 안 불러옴 */}
    {HOMEPAGE_URL &&  
    <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">바로가기</a>}
    {/* norferrer : 해당페이지로 넘어가기 위해 http에게 요청함 */}
 <hr/>    
  </div> /* .item end */


  )
};

export default TourItem;
