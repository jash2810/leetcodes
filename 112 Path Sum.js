var hasPathSum = function(root, targetSum) {
    
   if(!root)
        return false;
    let rem = targetSum - root.val;
    if(root.left==null && root.right==null && rem==0)
        return true;

    return hasPathSum(root.left,rem)||hasPathSum(root.right,rem);
};
