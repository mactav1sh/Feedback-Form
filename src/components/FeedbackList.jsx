import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return null;
  }
  return (
    <AnimatePresence>
      {feedback.map((item) => {
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} key={item.id} />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}
