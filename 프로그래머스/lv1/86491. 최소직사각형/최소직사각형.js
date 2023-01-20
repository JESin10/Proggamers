function solution(sizes) {
    let width = 0;
    let height = 0;
    
    for(let i = 0; i < sizes.length; ++i){        
        let Max = Math.max(sizes[i][0], sizes[i][1]);
        let Min = Math.min(sizes[i][0], sizes[i][1]);
        width = Math.max(width, Max); 
        height = Math.max(height, Min); 

    }
    return width * height;
}