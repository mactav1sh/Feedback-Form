import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';
import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (isLoading && feedback.length === 0) {
    return <Spinner />;
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
