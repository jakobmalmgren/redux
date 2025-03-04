import { useSelector } from "react-redux";
// USESELECTOR GÖR ATT MAN KAN FÅ HELA GLOBALA STATET FRÅN STORE
const SeeChangingName = () => {
  const name = useSelector((state) => {
    return state.name.value;
  });
  // 1.här får man state från store! HELA STATET
  //2.changingName som finns i store, EN PROPERTY!
  // 3.sen value från NAMEREDUCER INITIALVALUE!

  // DE HÄR ÄR SOM AN ANVÄNDER CONST[NAME, SETNAME] = USESTATE("")
  // DÅ ANVÄNDER MAN SIG AV USESELECTOR FÖR NÅ INITALIZE STATE VAR MAN VILL
  return (
    <div>
      <h1>see the name:</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default SeeChangingName;
