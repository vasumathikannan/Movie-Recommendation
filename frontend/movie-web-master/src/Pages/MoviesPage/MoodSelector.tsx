import React from 'react';

interface MoodSelectorProps {
  mood: string;
  setMood: (mood: string) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ mood, setMood }) => {
  return (
    <div>
      <label htmlFor="mood" className="block text-sm font-medium text-gray-700">Select Mood</label>
      <select
        id="mood"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Select Mood</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="action">Action</option>
        <option value="romantic">Romantic</option>
        <option value="comedy">Comedy</option>
        <option value="horror">Horror</option>
      </select>
    </div>
  );
};

export default MoodSelector;

