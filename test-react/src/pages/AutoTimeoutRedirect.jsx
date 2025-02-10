import { useEffect, useState } from "react";
import useInactivity from "../hooks/useInactivity ";
import Modal from "../components/Modal/Modal";
import { formatSeconds } from "../utils/timeFormatter";
import { useNavigate } from "react-router-dom";
const AutoTimeoutRedirect = () => {
  const nav = useNavigate();
  const [isActive, setIsActive, remainingTime, stopInactivityTracking] =
    useInactivity();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isActive && !isModalOpen) {
      setIsModalOpen(true);
    }

    if (isModalOpen) stopInactivityTracking();
  }, [isActive, isModalOpen]);

  const onProceed = () => {
    setIsModalOpen(false);
    setIsActive(true);
  };

  const onStop = () => {
    stopInactivityTracking();
    nav("/");
  };

  return (
    <div>
      <h1>{isActive ? "활성" : "비활성"}</h1>
      <p>남은 시간: {formatSeconds(remainingTime)}</p>
      {isModalOpen && (
        <Modal onProceed={onProceed} onStop={onStop}>
          <p>확인</p>
        </Modal>
      )}
    </div>
  );
};

export default AutoTimeoutRedirect;
