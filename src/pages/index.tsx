import Image from "next/image";
import setting from "@/../profile.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import crypto from "crypto"

export default function Home() {
  const copyTextToClipboard = () => {
    const textToCopy = setting.name;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast("📋 Discord 사용자 이름이 복사되었습니다.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("텍스트 복사 실패: ", error);
      });
  };

  const gravatar = "https://1.gravatar.com/avatar/"+crypto.createHash('sha256').update(setting.gravatar).digest("hex")

  return (
    <main>
      <header>
        <div className="DivImage">
          <Image alt="Profile" src={gravatar} />
        </div>
      </header>
      <div className="Badge">
        <Link href="https://sqlare.com">
          <svg
            width="616"
            height="616"
            viewBox="0 0 616 616"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_21)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M-0.5 307.5C-0.5 137.396 137.396 -0.5 307.5 -0.5V-0.5C477.604 -0.5 615.5 137.396 615.5 307.5V307.5C615.5 477.604 477.604 615.5 307.5 615.5V615.5C137.396 615.5 -0.5 477.604 -0.5 307.5V307.5Z"
                fill="#32343F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M350.5 253.5C336.161 280.18 322.828 307.514 310.5 335.5C296.625 359.087 285.625 384.087 277.5 410.5C275.837 412.438 275.171 414.772 275.5 417.5C273.091 422.491 271.424 427.825 270.5 433.5C268.96 435.838 268.294 438.505 268.5 441.5C266.631 445.613 265.464 449.946 265 454.5C262.723 459.668 259.89 464.502 256.5 469C250.124 473.752 243.124 474.752 235.5 472C229.637 465.441 225.471 457.941 223 449.5C217.028 429.833 217.028 410.166 223 390.5C228.769 375.092 233.769 359.426 238 343.5C238.667 338.833 238.667 334.167 238 329.5C237.576 326.975 236.41 324.975 234.5 323.5C229.342 322.542 224.009 321.875 218.5 321.5C212.647 320.605 207.314 318.438 202.5 315C178.246 293.634 168.079 266.801 172 234.5C181.556 184.797 210.056 151.63 257.5 135C282.106 131.104 306.44 132.437 330.5 139C352 147.167 366.833 162 375 183.5C376.509 195.835 375.176 207.835 371 219.5C364.91 231.359 358.076 242.693 350.5 253.5Z"
                fill="#FDFDFD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M276.5 265.5C262.163 270.486 249.83 267.486 239.5 256.5C234.804 249.53 233.304 241.864 235 233.5C237.607 220.072 244.441 209.406 255.5 201.5C273.147 189.731 292.48 185.397 313.5 188.5C306.475 214.548 295.642 238.882 281 261.5C279.629 263.041 278.129 264.375 276.5 265.5Z"
                fill="#33353F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M255.5 201.5C244.441 209.406 237.607 220.072 235 233.5C233.304 241.864 234.804 249.53 239.5 256.5C249.83 267.486 262.163 270.486 276.5 265.5C269.039 275.059 259.372 280.726 247.5 282.5C225.975 281.812 216.475 270.812 219 249.5C223.516 227.507 235.683 211.507 255.5 201.5Z"
                fill="#C0C0C0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M350.5 253.5C379.026 252.286 403.193 261.953 423 282.5C435.283 298.025 440.283 315.691 438 335.5C436.356 350.77 431.356 364.77 423 377.5C404.556 399.939 382.056 417.106 355.5 429C337.337 435.104 318.67 437.437 299.5 436C288.813 435.671 281.146 430.838 276.5 421.5C276.264 418.391 276.597 415.391 277.5 412.5C295.929 406.884 312.596 398.05 327.5 386C349.281 365.936 360.948 341.103 362.5 311.5C362.167 308.5 361.833 305.5 361.5 302.5C355.108 299.82 348.775 299.987 342.5 303C328.926 311.073 318.26 321.906 310.5 335.5C322.828 307.514 336.161 280.18 350.5 253.5Z"
                fill="#C0C0C0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M277.5 412.5C277.5 411.833 277.5 411.167 277.5 410.5C285.625 384.087 296.625 359.087 310.5 335.5C318.26 321.906 328.926 311.073 342.5 303C348.775 299.987 355.108 299.82 361.5 302.5C361.833 305.5 362.167 308.5 362.5 311.5C360.948 341.103 349.281 365.936 327.5 386C312.596 398.05 295.929 406.884 277.5 412.5Z"
                fill="#343540"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M218.5 321.5C224.009 321.875 229.342 322.542 234.5 323.5C228.886 323.927 223.553 323.26 218.5 321.5Z"
                fill="#98999E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M277.5 410.5C277.5 411.167 277.5 411.833 277.5 412.5C276.597 415.391 276.264 418.391 276.5 421.5C275.566 420.432 275.232 419.099 275.5 417.5C275.171 414.772 275.837 412.438 277.5 410.5Z"
                fill="#AE7873"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M270.5 433.5C270.435 436.428 269.768 439.095 268.5 441.5C268.294 438.505 268.96 435.838 270.5 433.5Z"
                fill="#73757C"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_21">
                <rect width="616" height="616" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
      <div className="UserName">
        <h1 onClick={copyTextToClipboard}>{setting.display_name}</h1>
        <p>imnyang</p>
        <p className="text-zinc-400">{setting.pronouns}</p>
        <div className="Line" />
        내 소개
        <br />
        <p className="text-sm text-slate-400"></p>
        <p className="text-sm text-slate-400">
          {`Blog : `}
          <a href="https://blog.imnyang.xyz">blog.imnyang.xyz</a>
        </p>
        <br />
        <p className="text-sm text-slate-400">
          {`Dis : `}
          <a href="https://sqlr.kr/imnyang">sqlr.kr/imnyang</a>
        </p>
        <p className="text-sm text-slate-400">
          {`Mail : `}
          <a href="mailto:me@imnyang.xyz">me@imnyang.xyz</a>
        </p>
        <div className="Line" />
        <p className="text-sm text-slate-400">
          Discord 가입 시기: <br />
          {setting.signup_time}
        </p>
        <div className="Line" />
        <p className="text-sm text-slate-400">메모</p>
        <textarea
          className="text-sm"
          placeholder="클릭하여 메모 추가하기"
        ></textarea>
      </div>
      <ToastContainer />
    </main>
  );
}
