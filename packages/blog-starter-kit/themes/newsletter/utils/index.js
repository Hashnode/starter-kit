import moment from 'dayjs';

export const formatDate = (dateString) => {
    const difference = moment().diff(moment(dateString), 'minute');
    if (difference <= 1440) {
      if (difference <= 1) {
        return 'Just now';
      } else if (difference > 1 && difference < 60) {
        return `${difference} mins`;
      } else if (difference >= 60 && difference <= 1440) {
        const diffInHour = moment().diff(moment(dateString), 'hour');
        return `${diffInHour} hr${diffInHour === 1 ? '' : 's'} ago`;
      }
    } else if (difference > 1440 && difference <= 481801) {
      return moment(dateString).format('MMM D');
    } else {
      return moment(dateString).format('MMM D, YYYY');
    }
  };
