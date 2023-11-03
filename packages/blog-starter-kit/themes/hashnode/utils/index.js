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

  export const triggerCustomWidgetEmbed = async (pubId) => {
    const frames = document.querySelectorAll('.hn-embed-widget');
    if (frames.length === 0) {
      return;
    }
    frames.forEach(async (frame) => {
      try {
        const iframe = document.createElement('iframe');
        const host = window.location.hostname;
        iframe.id = `frame-${frame.id}`;
        iframe.sandbox = 'allow-same-origin allow-forms allow-presentation allow-scripts allow-popups';
        iframe.src =
          host.indexOf('.hashnode.net') !== -1 || host.indexOf('.app.localhost') !== -1
            ? `${baseUrl}/api/pub/${pubId}/embed/${frame.id}`
            : `https://embeds.hashnode.com?p=${pubId}&w=${frame.id}`;
        iframe.width = '100%';
        frame.innerHTML = '';
        frame.appendChild(iframe);
        setTimeout(() => {
          // TODO:
          // eslint-disable-next-line no-undef
          iFrameResize({ log: false, autoResize: true }, `#${iframe.id}`);
        }, 1000);
        frame.setAttribute('class', 'hn-embed-widget-expanded');
      } catch (e) {
        console.log(e);
      }
    });
  };