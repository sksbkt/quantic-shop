import React, { useEffect, useRef, useState } from "react";
import Style from './inputComponents.module.scss';

function AnimateComponent(props) {

  const [visibility, setVisibility] = useState(Style.visible);
  const [newState, setnewState] = useState('');
  const ref = useRef(null);


  function wait(delay, ...args) {
    return new Promise(resolve => setTimeout(resolve, delay, ...args));
  }
  // function disappear() {
  //     return wait(500).then(() => {
  //         setnewStateAnimate(Style.invisiblenewState);
  //         setnewState(slides[current].name);
  //     });
  // }
  function disappear() {
    // return wait(500).then(() => {
    setVisibility(Style.invisible);
    wait(props.animationDuration).then(() => setnewState(props.children));
    // });
  }
  function appear() {
    return wait(props.animationDuration).then(() => setVisibility(Style.visible));
  }
  async function animate() {
    await disappear();
    await appear();
  }
  useEffect(() => {
    animate();
    return () => {
    };
  }, [props.trigger]);


  return <div
    className={visibility}
  > {newState}</div>;
}

export default AnimateComponent;
