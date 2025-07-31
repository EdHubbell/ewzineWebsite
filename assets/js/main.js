// Zoopraxiscope functionality
document.addEventListener('DOMContentLoaded', function() {
    const zoopraxiscope = document.getElementById('zoopraxiscope');
    
    if (zoopraxiscope) {
        const frames = document.querySelectorAll('.frame');
        const playPauseBtn = document.getElementById('play-pause');
        const speedControl = document.getElementById('speed-control');
        
        let currentFrame = 0;
        let isPlaying = false;
        let animationInterval;
        
        // Initialize first frame
        if (frames.length > 0) {
            frames[0].classList.add('active');
        }
        
        function showFrame(index) {
            frames.forEach(frame => frame.classList.remove('active'));
            frames[index].classList.add('active');
        }
        
        function nextFrame() {
            currentFrame = (currentFrame + 1) % frames.length;
            showFrame(currentFrame);
        }
        
        function play() {
            if (!isPlaying && frames.length > 0) {
                isPlaying = true;
                playPauseBtn.textContent = '❚❚';
                const speed = parseInt(speedControl.value);
                animationInterval = setInterval(nextFrame, speed);
            }
        }
        
        function pause() {
            if (isPlaying) {
                isPlaying = false;
                playPauseBtn.textContent = '▶';
                clearInterval(animationInterval);
            }
        }
        
        playPauseBtn.addEventListener('click', function() {
            if (isPlaying) {
                pause();
            } else {
                play();
            }
        });
        
        speedControl.addEventListener('input', function() {
            if (isPlaying) {
                pause();
                play();
            }
        });
        
        // Auto-play on load
        setTimeout(play, 1000);
    }
    
    // Add some interactive effects
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = `0 0 ${Math.random() * 20 + 10}px #0f0`;
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    });
});