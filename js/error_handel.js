//error handle, error handler, error exception
const num1 = 10;
const num2 = 20;
try {
    if (num1 < num2) {
        console.log("Yes");
    }else {
        console.log("No");
    }
}catch {
    console.error("Your code has something wrong");
}finally {
    console.warn("I always running..");
}