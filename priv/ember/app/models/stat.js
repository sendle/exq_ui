import DS from 'ember-data';

var Stat = DS.Model.extend({
  processed: DS.attr('number'),
  failed: DS.attr('number'),
  busy: DS.attr('number'),
  enqueued: DS.attr('number'),
  retrying: DS.attr('number'),
  scheduled: DS.attr('number'),
  dead: DS.attr('number'),
  date: DS.attr('date')
});

export default Stat;
