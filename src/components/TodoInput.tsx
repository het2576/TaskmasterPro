import React, { useState, useEffect } from 'react';
import { PlusCircle, Calendar, Tag, MessageSquare, AlertTriangle, Mic } from 'lucide-react';
import { TodoCategory, TodoPriority } from '../store/todo-store';
import { colors } from '../lib/colors';
import { motion, AnimatePresence } from 'framer-motion';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface TodoInputProps {
  onAdd: (todo: {
    text: string;
    priority: TodoPriority;
    category: TodoCategory;
    dueDate?: Date;
    notes?: string;
  }) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<TodoPriority>('medium');
  const [category, setCategory] = useState<TodoCategory>('personal');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setText(transcript);
    }
  }, [transcript]);

  const handleVoiceInput = () => {
    if (!browserSupportsSpeechRecognition) {
      alert('Your browser does not support voice input.');
      return;
    }

    if (!isListening) {
      SpeechRecognition.startListening({ continuous: true });
      setIsListening(true);
    } else {
      SpeechRecognition.stopListening();
      setIsListening(false);
      resetTranscript();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd({
        text: text.trim(),
        priority,
        category,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        notes: notes.trim() || undefined,
      });
      setText('');
      setDueDate('');
      setNotes('');
      setIsExpanded(false);
      if (isListening) {
        SpeechRecognition.stopListening();
        setIsListening(false);
        resetTranscript();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full px-4 py-3 pr-12 border-2 border-black rounded-lg 
                       placeholder-gray-400
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                       focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                       transition-all text-base"
              style={{ 
                backgroundColor: colors.background.input,
                color: colors.text.primary
              }}
            />
            <button
              type="button"
              onClick={handleVoiceInput}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors
                        ${isListening ? 'text-red-500' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 sm:flex-none px-4 py-3 rounded-lg
                     border-2 border-black
                     shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                     hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                     hover:translate-x-[-2px] hover:translate-y-[-2px]
                     transition-all font-medium flex items-center justify-center gap-2"
            style={{ backgroundColor: colors.background.moreButton, color: '#FFFFFF' }}
          >
            {isExpanded ? (
              <>
                <MessageSquare className="w-5 h-5" />
                <span>Less</span>
              </>
            ) : (
              <>
                <Tag className="w-5 h-5" />
                <span>More</span>
              </>
            )}
          </button>
          <button
            type="submit"
            disabled={!text.trim()}
            className="flex-1 sm:flex-none px-6 py-3 rounded-lg
                     border-2 border-black
                     shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                     hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                     hover:translate-x-[-2px] hover:translate-y-[-2px]
                     transition-all flex items-center justify-center gap-2 font-medium
                     disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: colors.background.accent, color: '#FFFFFF' }}
          >
            <PlusCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Add Task</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium" style={{ color: colors.text.primary }}>
                  <AlertTriangle className="w-4 h-4" />
                  Priority
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as TodoPriority)}
                  className="w-full px-3 py-2 border-2 border-black rounded font-medium"
                  style={{ backgroundColor: colors.priority[priority], color: colors.text.primary }}
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium" style={{ color: colors.text.primary }}>
                  <Tag className="w-4 h-4" />
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as TodoCategory)}
                  className="w-full px-3 py-2 border-2 border-black rounded font-medium"
                  style={{ backgroundColor: colors.category[category], color: colors.text.primary }}
                >
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                  <option value="shopping">Shopping</option>
                  <option value="health">Health</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium" style={{ color: colors.text.primary }}>
                  <Calendar className="w-4 h-4" />
                  Due Date
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-black rounded font-medium"
                  style={{ backgroundColor: '#54eff7', color: colors.text.primary }}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium" style={{ color: colors.text.primary }}>
                  <MessageSquare className="w-4 h-4" />
                  Notes
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add additional details..."
                  className="w-full px-3 py-2 border-2 border-black rounded font-medium"
                  style={{ 
                    backgroundColor: '#64f5a1',
                    color: colors.text.primary
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};