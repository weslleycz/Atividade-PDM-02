import React from "react";
import Svg, { Path } from "react-native-svg";

type Pros = {
    width: string;
    height: string;
    color: string;
};
export const ResumoIcon = ({ color, height, width }: Pros) => {
    return (
        <>
            <Svg width={width} height={height} viewBox="0 0 88 24" fill="none">
                <Path
                    opacity="0.6"
                    d="M36.104 17L33.864 13.108H32.646V17H31.05V7.27H34.41C35.1567 7.27 35.7867 7.40067 36.3 7.662C36.8227 7.92333 37.21 8.27333 37.462 8.712C37.7233 9.15067 37.854 9.64067 37.854 10.182C37.854 10.8167 37.6673 11.3953 37.294 11.918C36.93 12.4313 36.3653 12.7813 35.6 12.968L38.008 17H36.104ZM32.646 11.834H34.41C35.0073 11.834 35.4553 11.6847 35.754 11.386C36.062 11.0873 36.216 10.686 36.216 10.182C36.216 9.678 36.0667 9.286 35.768 9.006C35.4693 8.71667 35.0167 8.572 34.41 8.572H32.646V11.834ZM46.9657 12.954C46.9657 13.2433 46.947 13.5047 46.9097 13.738H41.0157C41.0624 14.354 41.291 14.8487 41.7017 15.222C42.1124 15.5953 42.6164 15.782 43.2137 15.782C44.0724 15.782 44.679 15.4227 45.0337 14.704H46.7557C46.5224 15.4133 46.0977 15.9967 45.4817 16.454C44.875 16.902 44.119 17.126 43.2137 17.126C42.4764 17.126 41.8137 16.9627 41.2257 16.636C40.647 16.3 40.1897 15.8333 39.8537 15.236C39.527 14.6293 39.3637 13.9293 39.3637 13.136C39.3637 12.3427 39.5224 11.6473 39.8397 11.05C40.1664 10.4433 40.619 9.97667 41.1977 9.65C41.7857 9.32333 42.4577 9.16 43.2137 9.16C43.9417 9.16 44.5904 9.31867 45.1597 9.636C45.729 9.95333 46.1724 10.4013 46.4897 10.98C46.807 11.5493 46.9657 12.2073 46.9657 12.954ZM45.2997 12.45C45.2904 11.862 45.0804 11.3907 44.6697 11.036C44.259 10.6813 43.7504 10.504 43.1437 10.504C42.593 10.504 42.1217 10.6813 41.7297 11.036C41.3377 11.3813 41.1044 11.8527 41.0297 12.45H45.2997ZM51.3363 17.126C50.7297 17.126 50.1837 17.0187 49.6983 16.804C49.2223 16.58 48.8443 16.2813 48.5643 15.908C48.2843 15.5253 48.135 15.1007 48.1163 14.634H49.7683C49.7963 14.9607 49.9503 15.236 50.2303 15.46C50.5197 15.6747 50.879 15.782 51.3083 15.782C51.7563 15.782 52.1017 15.698 52.3443 15.53C52.5963 15.3527 52.7223 15.1287 52.7223 14.858C52.7223 14.5687 52.5823 14.354 52.3023 14.214C52.0317 14.074 51.5977 13.92 51.0003 13.752C50.4217 13.5933 49.9503 13.4393 49.5863 13.29C49.2223 13.1407 48.905 12.912 48.6343 12.604C48.373 12.296 48.2423 11.89 48.2423 11.386C48.2423 10.9753 48.3637 10.602 48.6063 10.266C48.849 9.92067 49.1943 9.65 49.6423 9.454C50.0997 9.258 50.6223 9.16 51.2103 9.16C52.0877 9.16 52.7923 9.384 53.3243 9.832C53.8657 10.2707 54.155 10.8727 54.1923 11.638H52.5963C52.5683 11.2927 52.4283 11.0173 52.1763 10.812C51.9243 10.6067 51.5837 10.504 51.1543 10.504C50.7343 10.504 50.4123 10.5833 50.1883 10.742C49.9643 10.9007 49.8523 11.1107 49.8523 11.372C49.8523 11.5773 49.927 11.75 50.0763 11.89C50.2257 12.03 50.4077 12.142 50.6223 12.226C50.837 12.3007 51.1543 12.3987 51.5743 12.52C52.1343 12.6693 52.5917 12.8233 52.9463 12.982C53.3103 13.1313 53.623 13.3553 53.8843 13.654C54.1457 13.9527 54.281 14.3493 54.2903 14.844C54.2903 15.2827 54.169 15.6747 53.9263 16.02C53.6837 16.3653 53.3383 16.636 52.8903 16.832C52.4517 17.028 51.9337 17.126 51.3363 17.126ZM63.0008 9.286V17H61.4048V16.09C61.1528 16.4073 60.8215 16.6593 60.4108 16.846C60.0095 17.0233 59.5802 17.112 59.1228 17.112C58.5162 17.112 57.9702 16.986 57.4848 16.734C57.0088 16.482 56.6308 16.1087 56.3508 15.614C56.0802 15.1193 55.9448 14.522 55.9448 13.822V9.286H57.5268V13.584C57.5268 14.2747 57.6995 14.8067 58.0448 15.18C58.3902 15.544 58.8615 15.726 59.4588 15.726C60.0562 15.726 60.5275 15.544 60.8728 15.18C61.2275 14.8067 61.4048 14.2747 61.4048 13.584V9.286H63.0008ZM74.4446 9.16C75.0513 9.16 75.5926 9.286 76.0686 9.538C76.554 9.79 76.932 10.1633 77.2026 10.658C77.4826 11.1527 77.6226 11.75 77.6226 12.45V17H76.0406V12.688C76.0406 11.9973 75.868 11.47 75.5226 11.106C75.1773 10.7327 74.706 10.546 74.1086 10.546C73.5113 10.546 73.0353 10.7327 72.6806 11.106C72.3353 11.47 72.1626 11.9973 72.1626 12.688V17H70.5806V12.688C70.5806 11.9973 70.408 11.47 70.0626 11.106C69.7173 10.7327 69.246 10.546 68.6486 10.546C68.0513 10.546 67.5753 10.7327 67.2206 11.106C66.8753 11.47 66.7026 11.9973 66.7026 12.688V17H65.1066V9.286H66.7026V10.168C66.964 9.85067 67.2953 9.60333 67.6966 9.426C68.098 9.24867 68.5273 9.16 68.9846 9.16C69.6006 9.16 70.1513 9.29067 70.6366 9.552C71.122 9.81333 71.4953 10.1913 71.7566 10.686C71.99 10.2193 72.354 9.85067 72.8486 9.58C73.3433 9.3 73.8753 9.16 74.4446 9.16ZM82.9995 17.126C82.2715 17.126 81.6135 16.9627 81.0255 16.636C80.4375 16.3 79.9755 15.8333 79.6395 15.236C79.3035 14.6293 79.1355 13.9293 79.1355 13.136C79.1355 12.352 79.3082 11.6567 79.6535 11.05C79.9988 10.4433 80.4702 9.97667 81.0675 9.65C81.6648 9.32333 82.3322 9.16 83.0695 9.16C83.8068 9.16 84.4742 9.32333 85.0715 9.65C85.6688 9.97667 86.1402 10.4433 86.4855 11.05C86.8308 11.6567 87.0035 12.352 87.0035 13.136C87.0035 13.92 86.8262 14.6153 86.4715 15.222C86.1168 15.8287 85.6315 16.3 85.0155 16.636C84.4088 16.9627 83.7368 17.126 82.9995 17.126ZM82.9995 15.74C83.4102 15.74 83.7928 15.642 84.1475 15.446C84.5115 15.25 84.8055 14.956 85.0295 14.564C85.2535 14.172 85.3655 13.696 85.3655 13.136C85.3655 12.576 85.2582 12.1047 85.0435 11.722C84.8288 11.33 84.5442 11.036 84.1895 10.84C83.8348 10.644 83.4522 10.546 83.0415 10.546C82.6308 10.546 82.2482 10.644 81.8935 10.84C81.5482 11.036 81.2728 11.33 81.0675 11.722C80.8622 12.1047 80.7595 12.576 80.7595 13.136C80.7595 13.9667 80.9695 14.6107 81.3895 15.068C81.8188 15.516 82.3555 15.74 82.9995 15.74Z"
                    fill={color}
                />
                <Path
                    d="M21.21 15.89C19.4599 20.0289 15.1638 22.492 10.7078 21.9115C6.25174 21.331 2.73016 17.8494 2.0988 13.4003C1.46745 8.95116 3.88139 4.62729 8.00001 2.82999"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2V12H22Z"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Svg>
        </>
    );
};
