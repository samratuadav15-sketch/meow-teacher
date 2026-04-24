# CodeQuest - Learn Coding Like Duolingo 🎓

A beautiful, interactive coding learning app inspired by Duolingo. Learn Python, Java, and JavaScript with AI-powered explanations, interactive code editors, quizzes, and gamification features.

## Features ✨

- **🌍 Multi-Language Support**: Learn Python, Java, and JavaScript
- **🤖 AI-Powered Explanations**: Get personalized explanations (with OpenAI API integration)
- **💻 Interactive Code Editor**: Write and run code directly in the browser
- **📝 Quizzes & Exercises**: Test your knowledge with interactive quizzes
- **🎮 Gamification**: Earn XP, maintain streaks, unlock achievements
- **📊 Progress Tracking**: Track your learning progress across languages
- **🏆 Achievements System**: Unlock badges as you learn
- **💾 Local Storage**: Your progress is saved automatically

## How to Use 🚀

1. **Open the App**
   - Simply open `index.html` in your web browser
   - No installation or build tools required!

2. **Choose Your Language**
   - Select from Python, Java, or JavaScript
   - Each language has its own color theme and lesson path

3. **Start Learning**
   - Click on a lesson to begin
   - Read the AI-powered explanations
   - Write and run code in the interactive editor
   - Answer quizzes to test your knowledge

4. **Track Progress**
   - Earn XP for completing lessons
   - Maintain your daily streak
   - Unlock achievements as you progress
   - Check your profile to see stats

## Adding OpenAI API Key (Optional) 🔑

To use AI-powered explanations:

1. Open `ai-explanation.js`
2. Find the line: `const OPENAI_API_KEY = '';`
3. Add your OpenAI API key between the quotes
4. Save the file and refresh the browser

**Note**: The app works perfectly without an API key using pre-written explanations as fallback.

## File Structure 📁

```
basic coding/
├── index.html          # Main HTML file
├── styles.css          # Styling and UI
├── app.js              # Main application logic
├── lessons.js          # Lesson content for all languages
├── ai-explanation.js   # AI explanation system
└── README.md           # This file
```

## Features Breakdown 📋

### Language Selection
- Interactive cards with hover effects
- Color-coded for each language (Python: Blue, Java: Teal, JavaScript: Yellow)
- Progress bars showing completion status

### Lesson System
- Step-by-step lessons with multiple concepts
- Code examples that you can modify and run
- Quizzes at the end of each step
- XP rewards for completion

### Code Editor
- Dark theme editor
- Run and Reset buttons
- Output display with success/error states
- Syntax highlighting (basic)

### Progress Tracking
- XP points system
- Daily streak counter
- Level progression
- Hearts system (lives)

### Achievements
- First Steps (complete first lesson)
- On Fire (3-day streak)
- Week Warrior (7-day streak)
- Rising Star (100 XP)
- Code Master (500 XP)
- Level Up (reach level 5)
- Pythonista (Python level 2)
- Java Guru (Java level 2)

## Customization 🎨

### Adding New Lessons
Edit `lessons.js` to add new lessons:

```javascript
{
    id: 'python-6',
    title: 'Your New Lesson',
    description: 'Lesson description',
    xp: 20,
    steps: [
        {
            topic: 'Topic Name',
            explanation: 'Explanation text',
            code: 'code example',
            quiz: {
                question: 'Quiz question?',
                options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                correct: 0
            }
        }
    ]
}
```

### Changing Colors
Edit `styles.css` to customize the color scheme:

```css
:root {
    --primary: #58cc02;
    --secondary: #2b70c9;
    --danger: #ff4b4b;
    --warning: #ffc800;
}
```

## Browser Compatibility 🌐

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Tips for Learning 💡

1. **Practice Daily**: Maintain your streak by doing at least one lesson per day
2. **Experiment**: Try modifying the code examples to see what happens
3. **Review**: Go back to previous lessons to reinforce your learning
4. **Use AI**: Enable the OpenAI API for personalized explanations
5. **Complete Quizzes**: They help reinforce what you've learned

## Troubleshooting 🔧

**Code not running?**
- Make sure your syntax is correct
- Check for typos
- Try the Reset button to restore the original code

**Progress not saving?**
- Make sure localStorage is enabled in your browser
- Don't use private/incognito mode

**AI explanations not working?**
- Check your API key in ai-explanation.js
- The app will use fallback explanations if API fails

## Future Enhancements 🚧

Potential features to add:
- More programming languages (C++, C#, Ruby, etc.)
- Advanced lessons and projects
- Community features and leaderboards
- Code challenges and competitions
- Video tutorials
- Mobile app version

## License 📄

This project is open source and free to use for learning purposes.

## Happy Coding! 💻✨
