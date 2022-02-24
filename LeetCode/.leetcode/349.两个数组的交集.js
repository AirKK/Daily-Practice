var intersection = function (nums1, nums2) {
    let k = 0,
      result = [];
    function fn(nums1, nums2) {
      for (let i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
          result.push(nums2[i]);
        }
      }
      return result;
    }
    //判断哪个是小的集合
    if (nums1.length >= nums2.length) {
      return Array.from(new Set(fn(nums1, nums2)));
    } else {
      return Array.from(new Set(fn(nums2, nums1)));
    }
  };