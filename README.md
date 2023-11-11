# Next_Profile

간단한 프로필 사이트입니다.

## Local Test
테스트시 `next.config.js`에
```js
output: "export",
```
주석 처리하고 배포시에는 꼭 주석 헤제해주세요.

`yarn && yarn dev`

## Local Build
배포시 `next.config.js`에
```js
output: "export",
```
꼭 주석 해제해주세요.
`yarn && yarn build`

## Config
설정은 `profile.config.ts`에서 가능하며 `introduce.md`에서 파일 수정이 가능합니다.
