import {useStore} from 'mobx-store-provider';
import RootStore from '../stores/rootStore';
import {useCallback, useEffect, useState} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {requests, utils} from '../helpers';

export const useRootStore = () => {
  const store = useStore(RootStore);
  return store;
};

export const useDeviceEvent = eventName => {
  const [event, setEvent] = useState();
  useEffect(() => {
    if (eventName) {
      let subscription = DeviceEventEmitter.addListener(eventName, data => {
        setEvent(data);
      });
      return subscription.remove;
    }
  }, [eventName]);

  const _setEvent = data => {
    DeviceEventEmitter.emit(eventName, data);
  };
  return [event, _setEvent];
};

export const useFetchData = ({
  url,
  path = 'results',
  requestId,
  meta = [],
} = {}) => {
  const [res, setRes] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [errors, setErrors] = useState();
  const fetchData = useCallback(async () => {
    const {data, ok, originalError} = await requests.get(url);
    if (ok) {
      setRes(utils.getObject(data, path));
      const m = {};
      meta.map(key => {
        m[key] = utils.getObject(data, key);
      });
      setMetadata(m);
      if (errors) {
        setErrors();
      }
    } else {
      setErrors(originalError);
    }
  }, [path, url, errors, meta]);

  useEffect(() => {
    url && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, path, requestId]);
  return {res, errors, setRes, meta: metadata};
};
