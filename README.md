# Vanila JS를 활용한 TodoList

### 프로젝트를 하는 이유
1. jQuery는 간단하긴 하지만 버전에 따른 문제가 많고, 속도면에서도 느린 부분이 있다.
2. 또한, 실무에서도 jQuery는 지양하고 있는 추세라고 한다.
3. jQuery에만 의존하지 않기 위해 Vanila JS만 사용하여 진행한다.


### 요구사항
1. 해야할 목록인 ToDoList가 존재한다.
2. ToDoList 입력, 추가, 삭제, 수정이 가능하다.
3. ToDoList 더블 클릭 시 해당 list에 완료표시를 한다
   - 다시 더블클릭 시 default로 변경한다.
   - default는 빨강색 이다.
    - 대분류는 빨강색, 중분류는 파랑색, 완료는 회색
4. 목록에 대한 세부 등록이 가능하다.(tree구조)  
   EX)  
  ```
  1.청소하기
    - 쓸기
    - 닦기  
  2.밥먹기
    - 찌개 끓이기
    - 김치 썰기
    - 밥먹기
  ``` 
### 5. 입력, 추가, 삭제, 수정 시 prompt를 띄운다.
### 6. 입력 시 엔터 키로 등록 가능
