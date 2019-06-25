/*
 *
 * LinkFormContainer actions
 *
 */

import {
  ADD_LINK,
  ADD_LINK_SUCCEEDED,
  ADD_LINK_FAILED,
  ADD_LINK_CANCELLED,
} from './constants';

export function addLink(link) {
  return {
    type: ADD_LINK,
    link,
  };
}

export function addLinkCancelled(link) {
  return {
    type: ADD_LINK_CANCELLED,
  };
}

export function addLinkSuccess(link) {
  return {
    type: ADD_LINK_SUCCEEDED,
    link,
  };
}

export function addLinkFailed(link) {
  return {
    type: ADD_LINK_FAILED,
    link,
    message,
  };
}
