import React from "react";
import "./trickdetail.css";
import { FaInfoCircle } from "react-icons/fa";

const TrickDetail = () => {
  return (
    <div className="trick-container">
      <div className="trick-up-container">
        {/*招式標題區整個上面的部分*/}
        <div className="trick-left-up-container">
          {/* 招式標題區 左上角 */}
          <div className="move-title">
            <h1>
              招式名稱 <span className="edit-icon">✏️</span>
            </h1>
          </div>
          <div className="move-progress">
            <p className="progress-label">我的進度</p>
            <div className="progress-options">
              <label>
                <input type="radio" name="progress" />
                <span>還沒開始</span>
              </label>
              <label>
                <input type="radio" name="progress" />
                <span>成功做出</span>
              </label>
              <label>
                <input type="radio" name="progress" />
                <span>非常熟練</span>
              </label>
            </div>
          </div>
          {/* 招式說明區 有關三個選擇的詳細說明 */}
          <div className="progress-explanation">
            <div className="explain-icon">
              <FaInfoCircle />
            </div>
            <div className="explain-text">
              <p>還沒開始：尚未接觸此招式，完全不了解如何做出</p>
              <p>
                成功做出：已可以成功做出，但仍需教練從旁協助，或有細節需修正
              </p>
              <p>非常熟練：完全不需他人幫助即可完成招式，且能夠掌握細節</p>
            </div>
          </div>
        </div>
        <div className="move-right">
          {/* 招式說明區 右上角放影片的地方 */}
          <img
            src="/images/tricking.jpg"
            alt="video-placeholder"
            className="video-placeholder"
          />
        </div>
      </div>
      <div className="trick-middle-container">
        <h2 className="description-title">招式說明</h2>
        <div className="description-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="trick-bottom-container">
        <h2 className="break-title">分解動作</h2>
        <div className="break-totalitems">
          <div className="break-item">
            <img src="/images/tricking.jpg" alt="step 1" />
            <p>文字說明</p>
          </div>
          <div className="break-item">
            <img src="/images/tricking.jpg" alt="step 1" />
            <p>文字說明</p>
          </div>
          <div className="break-item">
            <img src="/images/tricking.jpg" alt="step 1" />
            <p>文字說明</p>
          </div>
          <div className="break-item">
            <img src="/images/tricking.jpg" alt="step 1" />
            <p>文字說明</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrickDetail;
