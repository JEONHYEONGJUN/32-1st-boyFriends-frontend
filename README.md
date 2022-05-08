# 32th 라인프렌즈 스토어 프로젝트 - BoyFriends

## introduce

- 라인프렌즈 스토어 클론 프로젝트
- 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발했습니다.
- 초기 데이터설계와, 커뮤니케이션의 중요성을 느끼는 귀중한 프로젝트경험이 되었습니다.


#### 기술 스택

- `FE`: JavaScript React.js, HTML5, CSS, SASS, react-router


#### Colaboration Tool

- Notion, Git, Trello, Slack

---

### 데모 영상

https://youtu.be/7dLoURqLBgs

---

### 구현 기능



- 평점반영 리뷰추가 기능

```
- 별점을 선택하는 각 별점 label태그의 value값을 이용하여 상품 별점 반영 가능한 댓글 창 구현
- 실제 데이터와 연동하여, 각기 다른 상품의 리뷰를 반영시킬 수 있다.

```

![](https://velog.velcdn.com/images/willy4202/post/5aebed4e-3424-4e37-9b96-30085d2d778b/image.gif)

![](https://velog.velcdn.com/images/willy4202/post/61dc38a4-7689-4859-b2a7-d93c228bb0d6/image.gif)

- 장바구니

```
- 토큰 반영 후, 서로 다른 장바구니 리스트 출력 가능
- 상품이 존재하지 않는 화면을 구현하여, 장바구니가 비었을 시 또는 전체삭제버튼을 눌렀을 때 나타나게 하여 더욱 실제같은 장바구니 구현
- 재고, 주문 수량이 0 이하로 내려갈 시, 0미만은 선택 불가능한 alert 창 출력
```

![](https://velog.velcdn.com/images/willy4202/post/7a35bd19-637f-4cdf-a071-fdb00abec79f/image.gif)



### Reference

이 프로젝트는 `라인 프렌즈 스토어` 사이트를 참조하여 학습목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
