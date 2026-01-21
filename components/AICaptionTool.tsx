
import React, { useState } from 'react';
import { generateCaption } from '../services/geminiService';

interface AICaptionToolProps {
  onClose: () => void;
}

const AICaptionTool: React.FC<AICaptionToolProps> = ({ onClose }) => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Enthusiastic');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setLoading(true);
    const captions = await generateCaption(topic, tone);
    setResult(captions || '');
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-indigo-deep/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full h-full sm:h-auto sm:max-w-2xl bg-white sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        <div className="p-4 sm:p-6 bg-primary text-indigo-deep flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined font-bold">auto_awesome</span>
            <h3 className="text-lg sm:text-xl font-bold">AI Caption Generator</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/10 rounded-full transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="flex-grow overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider">What is your post about?</label>
            <textarea 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., A review of the new Burj Khalifa light show..."
              className="w-full p-4 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[120px] text-base"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider">Desired Tone</label>
              <select 
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-3 rounded-xl bg-gray-50 border-gray-200 focus:ring-2 focus:ring-primary text-base"
              >
                <option>Enthusiastic</option>
                <option>Professional</option>
                <option>Humorous</option>
                <option>Minimalist</option>
                <option>Provocative</option>
              </select>
            </div>
            <div className="flex items-end">
              <button 
                onClick={handleGenerate}
                disabled={loading || !topic}
                className="w-full h-14 bg-primary text-indigo-deep font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin border-2 border-indigo-deep border-t-transparent rounded-full size-4"></span>
                    Generating...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-xl">bolt</span>
                    Generate
                  </>
                )}
              </button>
            </div>
          </div>
          
          {result && (
            <div className="space-y-3 animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider">Your Captions</label>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(result);
                    alert("Copied to clipboard!");
                  }}
                  className="text-xs text-primary font-bold flex items-center gap-1 hover:bg-primary/10 px-2 py-1 rounded"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span> Copy All
                </button>
              </div>
              <div className="p-4 sm:p-6 rounded-xl bg-indigo-deep text-white whitespace-pre-wrap leading-relaxed border border-white/10 shadow-inner">
                {result}
              </div>
            </div>
          )}
        </div>

        {/* Footer padding for mobile safari bottom bars */}
        <div className="h-4 sm:hidden shrink-0"></div>
      </div>
    </div>
  );
};

export default AICaptionTool;
