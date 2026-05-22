## INFO

Dùng useEffect vì cuộn trang là một side effect — tức là một tác động xảy ra bên ngoài React.

React chủ yếu quản lý giao diện và render component.

Còn những thứ như cuộn trang là tác động bên ngoài React, nên cần dùng useEffect để xử lý.

Trong useEffect, dùng Intersection Observer API tăng tính tương thích, giúp web mượt mà, cuộn tới video thì tự động Play, cuộn đi chỗ khác thì Pause.

```tsx
// Nếu cuộn tới video -> tự động play()
if (entry.isIntersecting) {
    videoRef.current
        .play()
        .catch((err) => console.log("play blocked:", err));

    setIsPlaying(true);
} else {
    // Nếu cuộn qua video khác -> tự động pause()
    videoRef.current.pause();

    setIsPlaying(false);
}
```
