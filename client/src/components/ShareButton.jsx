import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { createNote } from '../services/apiNote';

import share from '../assets/share.svg';
import link from '../assets/link.svg';

function ShareButton({ isShared, setIsShared, showValue, language, theme }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLink, setIsLink] = useState(true);

  async function copyURL() {
    try {
      await navigator.clipboard.writeText(location.href);
      toast.success('The URL has been added to your clipboard!');
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }

  async function handleShare() {
    try {
      setIsLink(false);
      setIsShared(true);
      const { note } = await createNote(showValue(), language, theme);
      navigate(`/${note._id}`);
      toast.success('Note created .\nYou can now share it with the word!');
      setIsLink(true);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }

  useEffect(() => {
    id && setIsShared(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-4">
      {isShared && isLink && (
        <div className="flex items-center gap-3">
          <button onClick={copyURL}>
            <img src={link} alt="" />
          </button>
          <span className="text-clr-gray-medium">.../{id}</span>
        </div>
      )}
      <button
        onClick={handleShare}
        className={`disabled:bg-clr-gray-medium flex items-center gap-3 rounded-full bg-clr-blue px-5 py-2.5 text-xl text-clr-white disabled:cursor-not-allowed`}
        disabled={isShared}
      >
        <img src={share} alt="Share" />
        Share
      </button>
    </div>
  );
}

export default ShareButton;
